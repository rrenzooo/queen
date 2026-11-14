import unittest

from server import (
    hash_password,
    validate_order_items,
    validate_product_model_upload,
    verify_password,
)


class FakeProductConnection:
    def __init__(self, products):
        self.products = products

    def execute(self, query, parameters):
        self.requested_ids = set(parameters[0])
        return self

    def fetchall(self):
        return [product for product in self.products if product[0] in self.requested_ids]


class AccountAndOrderTests(unittest.TestCase):
    def test_password_hash_is_salted_and_verifies(self):
        first_hash = hash_password("queen-password-123")
        second_hash = hash_password("queen-password-123")

        self.assertNotEqual(first_hash, second_hash)
        self.assertTrue(verify_password("queen-password-123", first_hash))
        self.assertFalse(verify_password("incorrect-password", first_hash))

    def test_order_uses_database_price_instead_of_client_price(self):
        connection = FakeProductConnection([
            ("camisa-siena", "Camisa Siena", 1990, 2),
        ])

        items = validate_order_items(connection, [{
            "productId": "camisa-siena",
            "size": "M",
            "quantity": 1,
            "price": 1,
        }])

        self.assertEqual(items[0]["unit_price"], 1990)

    def test_order_rejects_combined_quantity_over_stock(self):
        connection = FakeProductConnection([
            ("camisa-siena", "Camisa Siena", 1990, 2),
        ])

        with self.assertRaisesRegex(ValueError, "No hay suficiente stock"):
            validate_order_items(connection, [
                {"productId": "camisa-siena", "size": "S", "quantity": 2},
                {"productId": "camisa-siena", "size": "L", "quantity": 1},
            ])

    def test_mystery_box_price_is_selected_on_server(self):
        items = validate_order_items(
            FakeProductConnection([]),
            [{"boxTier": "signature", "size": "L", "quantity": 1, "price": 1}],
        )

        self.assertEqual(items[0]["unit_price"], 3990)
        self.assertEqual(items[0]["name"], "Caja Queen Signature")

    def test_client_cannot_invent_a_free_box_product_id(self):
        with self.assertRaisesRegex(ValueError, "ya no está disponible"):
            validate_order_items(
                FakeProductConnection([]),
                [{"productId": "caja-queen-fake", "size": "M", "quantity": 1}],
            )

    def test_invalid_mystery_box_tier_is_rejected(self):
        with self.assertRaisesRegex(ValueError, "caja Queen"):
            validate_order_items(
                FakeProductConnection([]),
                [{"boxTier": {"unexpected": "value"}, "size": "M", "quantity": 1}],
            )

    def test_product_model_upload_accepts_valid_glb_v2(self):
        model_data = b"glTF" + (2).to_bytes(4, "little") + (20).to_bytes(4, "little") + b"\x00" * 8

        validate_product_model_upload("camisa-siena", model_data)

    def test_product_model_upload_rejects_invalid_glb_and_product_id(self):
        invalid_glb = b"glTF" + (1).to_bytes(4, "little") + (20).to_bytes(4, "little") + b"\x00" * 8

        with self.assertRaisesRegex(ValueError, "GLB 2.0 válido"):
            validate_product_model_upload("camisa-siena", invalid_glb)
        with self.assertRaisesRegex(ValueError, "identificador"):
            validate_product_model_upload("../other-product", invalid_glb)


if __name__ == "__main__":
    unittest.main()

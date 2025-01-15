<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_SESSION['user_id'];
    $total_amount = $_POST['total_amount'];

    // Create order
    $sql = "INSERT INTO orders (user_id, total_amount) VALUES ('$user_id', '$total_amount')";
    if ($conn->query($sql) === TRUE) {
        $order_id = $conn->insert_id;

        // Add order items
        $cart_items = json_decode($_POST['cart_items'], true);
        foreach ($cart_items as $item) {
            $product_id = $item['product_id'];
            $quantity = $item['quantity'];
            $price = $item['price'];

            $sql = "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ('$order_id', '$product_id', '$quantity', '$price')";
            $conn->query($sql);
        }

        echo "Order placed successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
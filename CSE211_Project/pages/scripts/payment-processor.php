<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "egyptian_brand";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process payment form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_SESSION['user_id'];
    $total_amount = $_POST['total_amount'];
    $cart_items = json_decode($_POST['cart_items'], true);

    // Insert order into database
    $sql = "INSERT INTO orders (user_id, total_amount) VALUES ('$user_id', '$total_amount')";

    if ($conn->query($sql) === TRUE) {
        $order_id = $conn->insert_id;

        // Insert order items into database
        foreach ($cart_items as $item) {
            $product_name = $item['name'];
            $quantity = $item['quantity'];
            $price = $item['price'];

            $sql = "INSERT INTO order_items (order_id, product_name, quantity, price) VALUES ('$order_id', '$product_name', '$quantity', '$price')";
            $conn->query($sql);
        }

        echo "Payment successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
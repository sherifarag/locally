<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product_id = $_POST['product_id'];
    $user_id = $_SESSION['user_id'];

    // Check if the product is already in the cart
    $sql = "SELECT * FROM cart WHERE user_id = '$user_id' AND product_id = '$product_id'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "Product already in cart.";
    } else {
        // Add product to cart
        $sql = "INSERT INTO cart (user_id, product_id) VALUES ('$user_id', '$product_id')";
        if ($conn->query($sql) === TRUE) {
            echo "Product added to cart!";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>
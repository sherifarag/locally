<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password'];

    // Check if the user is an admin
    $sql = "SELECT id FROM users WHERE email = '$email' AND is_admin = 1";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $_SESSION['admin_id'] = $result->fetch_assoc()['id'];
        echo "Admin login successful!";
        header("Location: admin.html");
    } else {
        echo "Invalid email or password.";
    }
}

$conn->close();
?>
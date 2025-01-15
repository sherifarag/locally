<?php
session_start(); // Start the session

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: ../pages/login.html"); // Redirect to login page
    exit;
}

// User is logged in
$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delicious Food Zone</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>Welcome to Delicious Food Zone, <?php echo htmlspecialchars($username); ?>!</h1>
    <p>Enjoy your stay.</p>
    <a href="scripts/logout.php">Logout</a>
</body>
</html>
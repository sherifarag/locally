<?php
session_start(); // Start the session

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode(["error" => "User not logged in"]);
    exit;
}

// Return user data as JSON
echo json_encode([
    "username" => $_SESSION['username']
]);
?>
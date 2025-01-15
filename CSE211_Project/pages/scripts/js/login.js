document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate a login request (replace with actual API call)
    if (email === "user@example.com" && password === "password123") {
        window.location.href = "index.html"; // Redirect to main page
    } else {
        alert("Invalid email or password.");
    }
});
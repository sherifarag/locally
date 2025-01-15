// checkout.js
document.addEventListener("DOMContentLoaded", function () {
    const checkoutForm = document.getElementById("checkout-form");

    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate form inputs
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const zip = document.getElementById("zip").value;
        const card = document.getElementById("card").value;
        const expiry = document.getElementById("expiry").value;
        const cvv = document.getElementById("cvv").value;

        if (!name || !email || !address || !city || !zip || !card || !expiry || !cvv) {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate order processing
        alert("Order placed successfully!");
        window.location.href = "thank-you.html"; // Redirect to a thank-you page
    });
});
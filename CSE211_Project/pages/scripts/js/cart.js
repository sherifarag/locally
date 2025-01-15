// cart.js
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add an item to the cart
function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
    updateCart();
    alert(`${product.name} added to cart!`);
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    let total = 0;

    // Clear the cart items container
    if (cartItems) {
        cartItems.innerHTML = "";

        // Add each item to the cart display
        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" width="80">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(cartItem);

            // Calculate the total price
            total += item.price;
        });

        // Update the total price
        if (cartTotal) {
            cartTotal.textContent = `Total: $${total.toFixed(2)}`;
        }
    }
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
    updateCart();
}

// Function to handle the checkout process
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add some items before checking out.");
    } else {
        alert("Proceeding to checkout...");
        // Redirect to the checkout page or process the order
        window.location.href = "checkout.html";
    }
}

// Add click event listeners to all product cards
document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");

    products.forEach((product) => {
        product.addEventListener("click", function () {
            const productName = product.querySelector("h3").textContent;
            const productPrice = product.querySelector("p").textContent.replace("$", "");
            const productImage = product.querySelector("img").src;

            const productData = {
                name: productName,
                price: parseFloat(productPrice),
                image: productImage,
            };

            addToCart(productData);
        });
    });

    // Add event listener to the checkout button
    const checkoutButton = document.getElementById("checkout-button");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", checkout);
    }

    // Update the cart display when the page loads
    updateCart();
});
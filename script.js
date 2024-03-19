// Select the add to cart button
var addToCartButton = document.querySelector('.product-card button');

// Create a cart array
var cart = [];

// Add an event listener to the add to cart button
addToCartButton.addEventListener('click', function() {
    // Get the product details
    var size = document.querySelector('.product-card #size').value;
    var price = document.querySelector('.product-card p').textContent;
    var name = document.querySelector('.product-card h2').textContent;

    // Add the product to the cart
    cart.push({
        name: name,
        size: size,
        price: price
    });

    // Update the cart icon
    document.querySelector('#cartIcon').textContent = cart.length;
});
// Select the cart container
var cartContainer = document.querySelector('.cart-container');

// Function to generate cart HTML
function generateCartHTML(cart) {
    // Start with an empty string
    var html = '';

    // Loop over the cart array
    for (var i = 0; i < cart.length; i++) {
        // For each item, add a string of HTML to the html variable
        html += `
            <div class="cart-item">
                <h2>${cart[i].name}</h2>
                <p>${cart[i].size}</p>
                <p>${cart[i].price}</p>
            </div>
        `;
    }

    // After the loop, insert the HTML into the cart container
    cartContainer.innerHTML = html;
}

// Call the function with the cart array
generateCartHTML(cart);
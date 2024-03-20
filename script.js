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
    var item = {
        name: name,
        size: size,
        price: price
    };
    cart.push(item);

    // Update the cart count
    var cartCount = document.querySelector('#cartCount');
    if (!cartCount) {
        cartCount = document.createElement('span');
        cartCount.id = 'cartCount';
        document.querySelector('#cartIcon').after(cartCount);
    }
    cartCount.textContent = cart.length;

    // Add the item to the cart table
    addToCart(item);
});

function addToCart(item) {
    var cartBody = document.getElementById('cartBody');

    var row = document.createElement('tr');

    var cellName = document.createElement('td');
    cellName.textContent = item.name;
    row.appendChild(cellName);

    var cellSize = document.createElement('td');
    cellSize.textContent = item.size;
    row.appendChild(cellSize);

    var cellPrice = document.createElement('td');
    cellPrice.textContent = item.price;
    row.appendChild(cellPrice);

    cartBody.appendChild(row);
}
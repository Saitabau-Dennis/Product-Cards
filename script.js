//cart array to hold the items
let cart = [];

//  a function addItemToCart(item) that takes an item as a parameter and adds it to the cart array
function addItemToCart(item) {
    cart.push(item);
}

// a function displayCartItems() that iterates over the cart array and displays each item
function displayCartItems() {
    for(let i = 0; i < cart.length; i++) {
        console.log(cart[i]);
    }
}
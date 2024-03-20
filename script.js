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
// JavaScript
document.querySelectorAll('.sizes span').forEach(span => {
    span.addEventListener('click', function() {
      // Remove 'selected' class from all spans
      document.querySelectorAll('.sizes span').forEach(span => {
        span.classList.remove('selected');
      });
      // Add 'selected' class to clicked span
      this.classList.add('selected');
    });
  });
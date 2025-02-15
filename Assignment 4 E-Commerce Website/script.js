// Get the cart icon and cart section elements
const cartIcon = document.getElementById('cart-icon');
const cartSection = document.getElementById('cart-section');
const cartList = document.getElementById('cart-list');
const totalCostElement = document.getElementById('total-cost');

// Initialize the cart data
let cartData = [];

// Function to add item to cart
function addItemToCart(item) {
  // Check if the item is already in the cart
  const existingItem = cartData.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    // Update the quantity of the existing item
    existingItem.quantity += 1;
  } else {
    // Add the new item to the cart
    cartData.push({ id: item.id, name: item.name, price: item.price, quantity: 1 });
  }

  // Update the cart icon count
  updateCartIconCount();

  // Update the cart list
  updateCartList();

  // Save the cart data to local storage
  saveCartDataToLocalStorage();
}

// Function to update cart icon count
function updateCartIconCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cartData.length;
}

// Function to update cart list
function updateCartList() {
  cartList.innerHTML = '';
  cartData.forEach((cartItem) => {
    const cartItemElement = document.createElement('li');
    cartItemElement.textContent = `${cartItem.name} x ${cartItem.quantity} = $${cartItem.price * cartItem.quantity}`;
    cartList.appendChild(cartItemElement);
  });

  // Update the total cost
  const totalCost = cartData.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);
  totalCostElement.textContent = `Total: $${totalCost}`;
}

// Function to save cart data to local storage
function saveCartDataToLocalStorage() {
  localStorage.setItem('cartData', JSON.stringify(cartData));
}

// Function to load cart data from local storage
function loadCartDataFromLocalStorage() {
  const storedCartData = localStorage.getItem('cartData');
  if (storedCartData) {
    cartData = JSON.parse(storedCartData);
    updateCartIconCount();
    updateCartList();
  }
}

// Load cart data from local storage on page load
loadCartDataFromLocalStorage();

// Add event listeners to add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const productId = event.target.dataset.productId;
    const productName = event.target.dataset.productName;
    const productPrice = event.target.dataset.productPrice;
    const product = { id: productId, name: productName, price: productPrice };
    addItemToCart(product);
  });
});

// Add event listener to cart icon
cartIcon.addEventListener('click', () => {
  cartSection.classList.toggle('show');
});

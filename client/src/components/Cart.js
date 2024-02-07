import React from 'react';

// The Cart component displays the items currently in the shopping cart.
function Cart({ cartItems, onRemoveFromCart }) {
  // Check if cartItems is either not available or empty, and display a message if the cart is empty.
  if (!cartItems || cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  // Render the cart items. For each item in the cart, it displays the title and a remove button.
  return (
    <div>
      <h2>Cart</h2> {/* Heading for the cart section */}
      {cartItems.map(item => (
        // For each item in the cart, create a div block with the book's title and a remove button.
        <div key={item.id}> {/* Each item is identified by a unique key, which is the item's id */}
          <h3>{item.title}</h3> {/* Display the title of the book */}
          {/* Button to remove the item from the cart. 
              onClick triggers the onRemoveFromCart function passed as a prop, with the item's id. */}
          <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;

import React from 'react';

// The BookList component is responsible for displaying a list of books.
function BookList({ books, onAddToCart }) {
  // Renders the list of books. Each book is displayed with its title, description, image, and an 'Add to Cart' button.
  return (
    <div>
      {books.map(book => (
        // Mapping through each book in the books array to create a display for each.
        <div key={book.id} style={{ margin: '10px', border: '1px solid gray', padding: '10px' }}>
          <h3>{book.title}</h3> {/* Displays the title of the book */}
          <p>{book.description}</p> {/* Displays the description of the book */}
          {/* Shows the book cover image. The 'alt' text is the book title for accessibility. */}
          <img src={book.imageUrl} alt={book.title} style={{ width: '100px', height: '150px' }} />
          {/* 'Add to Cart' button. Clicking this button triggers the onAddToCart function, adding the book to the cart. */}
          <button onClick={() => onAddToCart(book)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;

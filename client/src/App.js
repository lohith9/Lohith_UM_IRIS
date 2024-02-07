import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoryList from '../src/components/CategoryList';
import BookList from '../src/components/BookList';
import Cart from '../src/components/Cart';

function App() {
  // State management for various aspects of the application.
  // selectedCategory: Currently selected book category.
  const [selectedCategory, setSelectedCategory] = useState(null);
  // categories: List of all available book categories.
  const [categories, setCategories] = useState([]);
  // books: List of books in the selected category.
  const [books, setBooks] = useState([]);
  // cartItems: List of books added to the shopping cart.
  const [cartItems, setCartItems] = useState([]);
  // selectedCategories: Set of selected categories for filtering books.
  const [selectedCategories, setSelectedCategories] = useState(new Set()); // Store selected categories in a Set

  // Fetch categories from the server
  useEffect(() => {
    fetch('http://localhost:3001/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error:', error));
  }, []);

  // Fetch books when a category is selected
  useEffect(() => {
    if (selectedCategory) {
      fetch(`http://localhost:3001/api/books/${selectedCategory}`)
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => console.error('Error:', error));
    }
  }, [selectedCategory]);

  // Handler for adding a book to the cart.
  // Makes a POST request to the backend and updates the cart state.
  useEffect(() => {
    fetch('http://localhost:3001/api/cart')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error:', error));
  }, []);  

  const handleAddToCart = book => {
    // Make a POST request to add the book to the cart
    fetch('http://localhost:3001/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response as needed (e.g., update the cartItems state)
        setCartItems(currentItems => [...currentItems, book]);
      })
      .catch(error => console.error('Error:', error));
  };
  
  // Handler for removing a book from the cart.
  // Makes a DELETE request to the backend and updates the cart state.
  const handleRemoveFromCart = bookId => {
    // Make a DELETE request to remove the book from the cart
    fetch(`http://localhost:3001/api/cart/${bookId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response as needed (e.g., update the cartItems state)
        setCartItems(currentItems =>
          currentItems.filter(item => item.id !== bookId)
        );
      })
      .catch(error => console.error('Error:', error));
  };  

    // Fetch books when categories are selected
    // Fetch books when categories are selected
useEffect(() => {
    if (selectedCategories.size > 0) {
      // Create an array from the selectedCategories set to use in the Promise.all
      const categoryIds = Array.from(selectedCategories);
      Promise.all(categoryIds.map(categoryId =>
        fetch(`http://localhost:3001/api/books/${categoryId}`)
          .then(response => response.json())
      )).then(results => {
        // Flatten the array of arrays and set the books
        const newBooks = results.flat();
        setBooks(newBooks);
      }).catch(error => {
        console.error('Error:', error);
      });
    } else {
      setBooks([]); // No categories selected, set books to empty array
    }
  }, [selectedCategories]); // Depend on selectedCategories  
    
  // Handler for category selection.
  // Adds or removes categories from the selectedCategories set.
    const handleCategorySelect = categoryId => {
        setSelectedCategories(prevSelectedCategories => {
          const newSelection = new Set(prevSelectedCategories);
          if (newSelection.has(categoryId)) {
            newSelection.delete(categoryId); // Toggle off if already selected
          } else {
            newSelection.add(categoryId); // Toggle on if not selected
          }
          return newSelection;
        });
      };    

  // Render the application UI.
  return (
      <div className="app-container">
                <CategoryList categories={categories} onSelectCategory={handleCategorySelect} selectedCategories={selectedCategories} />
                <BookList books={books} onAddToCart={handleAddToCart} />
                <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
       </div>
  );
}

export default App;


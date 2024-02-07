const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3001; // This app run on Port 3001

app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

// Dummy data(Hard-Coded List) for books and categories
const categories = [
{ id: 1, name: "Fiction" },
{ id: 2, name: "Non-Fiction" },
{ id: 3, name: "Science Fiction" },
{ id: 4, name: "Mystery & Thriller" },
{ id: 5, name: "Biography" },
{ id: 6, name: "History" },
{ id: 7, name: "Children's Books" },
{ id: 8, name: "Young Adult" },
{ id: 9, name: "Self-Help" },
{ id: 10, name: "Travel" },];

const books = [
    {
      id: 101, 
      categoryId: 1,
      title: "The Great Gatsby",
      description: "A classic piece of American fiction set in the Jazz Age...", 
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg"
    },
    {
      id: 102,
      categoryId: 1, 
      title: "To Kill a Mockingbird",
      description: "A novel that deals with serious issues like racism and rape in a small-town community...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657._SY475_.jpg"
    },
    {
      id: 103,
      categoryId: 2,
      title: "Becoming",
      description: "An intimate, powerful, and inspiring memoir by the former First Lady of the United States...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1538926699l/38746585._SY475_.jpg"
    },
    {
      id: 104, 
      categoryId: 2,
      title: "Educated",
      description: "A memoir about a young girl who escapes from a survivalist family and goes on to earn a PhD from Cambridge University...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524560634l/35133922._SY475_.jpg"
    },
    {
      id: 105,
      categoryId: 1, 
      title: "1984",
      description: "A dystopian novel set in a world of perpetual war, omnipresent government surveillance, and public manipulation...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348990566l/5470._SY475_.jpg"
    },
    {
      id: 106,
      categoryId: 3,
      title: "Dune",
      description: "A complex science fiction novel set on the desert planet Arrakis with themes of politics, religion, technology and human emotion...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579061858l/44767458._SY475_.jpg"  
    },
    {
      id: 107,
      categoryId: 4,
      title: "And Then There Were None",  
      description: "A mystery novel about ten strangers lured into an isolated mansion, only to be killed off one by one...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387151693l/16299._SY475_.jpg"
    },
    {
      id: 108, 
      categoryId: 5,
      title: "Steve Jobs",
      description: "The biography of Apple co-founder Steve Jobs from his early days in the nascent tech industry to his death in 2011...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1568290893l/11084145._SY475_.jpg"
    },
    {
      id: 109,
      categoryId: 6,
      title: "A People's History of the United States",
      description: "A non-orthodox history of the United States, emphasizing the country's faults and failures as much as its successes...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417732283l/2767.jpg"
    },
    {
      id: 110, 
      categoryId: 7,
      title: "Harry Potter and the Sorcerer's Stone",
      description: "The first novel in the popular Harry Potter fantasy series about a boy wizard...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg"
    },
    {
      id: 111,
      categoryId: 8, 
      title: "The Hunger Games",
      description: "A dystopian young adult novel about children chosen to participate in a televised battle royale...",  
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447303603l/2767052._SY475_.jpg"
    },
    {
      id: 112,
      categoryId: 9,
      title: "The 7 Habits of Highly Effective People",
      description: "A self-help book outlining an approach to solving personal and professional problems...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436329820l/36072._SY475_.jpg"
    },
    {
      id: 113,
      categoryId: 10,
      title: "Wild",
      description: "A memoir recounting the author's grueling hike along the Pacific Crest Trail in 1995 as a journey of self-discovery...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591493296l/12262741._SY475_.jpg"
    },
    {
      id: 114, 
      categoryId: 1,
      title: "Pride and Prejudice",
      description: "A classic Regency era novel exploring themes of marriage, money and other social customs in early 19th-century England...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885._SY475_.jpg"
    },
    {
      id: 115,
      categoryId: 2,
      title: "I Know Why the Caged Bird Sings", 
      description: "The 1969 autobiography of American writer and poet Maya Angelou...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383634l/13214._SY475_.jpg"
    },
    {
      id: 116,
      categoryId: 3, 
      title: "The Martian",
      description: "A science fiction novel about an astronaut's lone struggle to survive on Mars after being left behind...",  
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429533141l/18007564._SY475_.jpg"
    },
    {
      id: 117, 
      categoryId: 4,
      title: "Gone Girl",
      description: "A thriller about the mysterious disappearance of a woman and the suspicions cast upon her husband...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1422213443l/21485717._SY475_.jpg" 
    },
    {
      id: 118,
      categoryId: 5,
      title: "Hidden Figures",
      description: "The true story of a team of African-American female mathematicians who served a vital role at NASA during the early years of spaceflight...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1467954303l/32093052._SY475_.jpg"
    },
    {
      id: 119,
      categoryId: 6,
      title: "A Short History of Nearly Everything", 
      description: "A popular science book by Bill Bryson describing humanity's understanding of natural history and the cosmos...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400959437l/21._SY475_.jpg"
    },
    {
      id: 120,
      categoryId: 7, 
      title: "Charlotte's Web",
      description: "A classic children's novel about a pig named Wilbur and a clever spider named Charlotte...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442726640l/370323._SY475_.jpg"
    },
    {
      id: 121,
      categoryId: 8,
      title: "The Book Thief",
      description: "A historical novel set in Germany during WWII from the perspective of a young foster girl who loves books...",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg"
    },
    {
      id: 122,
      categoryId: 9,
      title: "The Subtle Art of Not Giving a F*ck",
      description: "A self-help book that rebuts the claim that one must be positive all the time in order to be happy...",
    }];
const cart = [];

// GET all categories
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// GET books by category id
app.get('/api/books/:categoryId', (req, res) => {
  const categoryId = parseInt(req.params.categoryId, 10);
  const booksByCategory = books.filter(book => book.categoryId === categoryId);
  res.json(booksByCategory);
});

// HTML routes for the endpoints to view by category and books by category by ID
app.get('/categories', (req, res) => {
  let htmlContent = '<h1>Categories</h1><ul>';
  categories.forEach(category => {
    htmlContent += `<li>${category.name}</li>`;
  });
  htmlContent += '</ul>';
  res.send(htmlContent);
});

app.get('/books/:categoryId', (req, res) => {
  const categoryId = parseInt(req.params.categoryId, 10);
  const booksByCategory = books.filter(book => book.categoryId === categoryId);
  let htmlContent = `<h1>Books in Category: ${categoryId}</h1>`;
  booksByCategory.forEach(book => {
    htmlContent += `<div><h2>${book.title}</h2><p>${book.description}</p></div>`;
  });
  res.send(htmlContent);
});

// Add book to cart to use this endpoint on adding a book to cart use the API testing like Postman or ThunderClient
app.post('/api/cart', (req, res) => {
  const bookId = req.body.id; // Expecting an object with an 'id' property

  // Find the book by its ID
  const bookToAdd = books.find(book => book.id === bookId);
  if (!bookToAdd) {
      return res.status(404).json({ message: "Book not found" });
  }

  // Check if book already in cart
  const isBookInCart = cart.some(book => book.id === bookId);
  if (isBookInCart) {
      return res.status(409).json({ message: "Book already in cart" });
  }

  cart.push(bookToAdd); // Add the found book to the cart
  res.status(200).json({ message: "Book added to cart", cart });
  console.log(cart)
});

// GET the contents of the cart
app.get('/api/cart', (req, res) => {
  res.json(cart);
});

// Delete book from cart to use this endpoint on adding a book to cart use the API testing like Postman or ThunderClient
app.delete('/api/cart/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId, 10);
  const bookIndex = cart.findIndex(book => book.id === bookId);

  if (bookIndex === -1) {
      return res.status(404).send({ message: 'Book not found in cart' });
  }

  cart.splice(bookIndex, 1);
  res.json({ message: 'Book removed from cart', cart });
});

// Routes all this page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

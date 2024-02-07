# Lohith-Book-Store-IRIS-UM
 This is a book store covering functionalities

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (See: [Node.js](https://nodejs.org/))
- Parcel bundler (Install via npm: `npm install --save-dev parcel`)
- Install React and React DOM (Install via npm: `npm install react` and `npm install react react-dom`)

## Steps to run the application on local machine:

- Download the repository
- Open Visual Studio Code and load the folder
- Run the Parcel using the command `npx parcel public/index.html` (Runs on port 1234) --> It creates a dist folder and .parcel-cache for the application
- Now, run the application using the command --> `npm run dev` (Web application runs on port 3001)

## API Interactions

The frontend communicates with the backend via API calls (GET, POST, DELETE) to fetch categories and books, add items to the cart, and remove items from the cart.

## Backend (Express.js)

The backend is built with Express.js and handles API requests from the frontend, processes them, and sends back responses.

## Endpoints

1. **GET /api/categories**
   - Returns a list of book categories.

2. **GET /api/books/:categoryId**
   - Returns books belonging to a specified category.

3. **GET /api/cart**
   - Retrieves the current state of the shopping cart. (This endpoint works on local machine)
  
 ## To test below API endpoints use Postman or Thunder Client.

4. **POST /api/cart**
   - Adds a book to the shopping cart.

5. **DELETE /api/cart/:bookId**
   - Removes a book from the shopping cart.


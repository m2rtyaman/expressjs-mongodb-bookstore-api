# Express.js & MongoDB Bookstore API

A comprehensive **Book Management API** built with Node.js, Express.js, and MongoDB. This project demonstrates CRUD operations, Mongoose schema validation, and proper error handling.

## 🚀 Features

- **RESTful API Architecture**
- **MongoDB Integration** using Mongoose
- **CRUD Operations:**
  - Create new books
  - Read all books or specific book by ID
  - Update existing book details
  - Delete books
- **Data Validation:** Prevents invalid data entry (e.g., future publication years)
- **Development Tooling:** Configured with **Nodemon** for hot-reloading during development.

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/) (Dev Dependency)

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/m2rtyaman/expressjs-mongodb-bookstore-api.git](https://github.com/m2rtyaman/expressjs-mongodb-bookstore-api.git)
    cd expressjs-mongodb-bookstore-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add your MongoDB connection string and port:
    
    ```env
    MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/bookstore
    PORT=3000
    ```

4.  **Run the Server:**

    * **Development Mode (with Nodemon):**
        This will automatically restart the server when you make changes.
        ```bash
        npm run dev
        ```

    * **Production Mode:**
        ```bash
        npm start
        ```

## 📡 API Endpoints

You can test these endpoints using Postman or cURL.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/books` | Get all books |
| `GET` | `/api/books/:id` | Get a single book by ID |
| `POST` | `/api/books/add` | Add a new book |
| `PUT` | `/api/books/update/:id` | Update a book |
| `DELETE`| `/api/books/delete/:id` | Delete a book |

## 👤 Author

**Mert Yaman**
- GitHub: [@m2rtyaman](https://github.com/m2rtyaman)

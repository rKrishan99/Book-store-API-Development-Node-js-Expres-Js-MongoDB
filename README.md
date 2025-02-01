# Bookstore API

A simple RESTful API for managing books, built with **Node.js**, **Express.js**, and **MongoDB** using **Mongoose**.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [License](#license)

## Description

This is a simple Bookstore API that allows you to perform CRUD operations (Create, Read, Update, Delete) on books. It is built with Node.js, Express.js, and MongoDB.

The API includes the following functionality:
- Fetch all books
- Get a single book by ID
- Add a new book
- Update an existing book
- Delete a book

It uses **Mongoose** for database modeling and **async/await** for handling asynchronous operations.

## Installation

### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (Local installation or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Steps to run the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/bookstore-api.git
    ```

2. Navigate to the project directory:
    ```bash
    cd bookstore-api
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory with the following content:
    ```env
    PORT=3000
    DB_URI=your_mongodb_connection_string
    ```

5. Start the server:
    ```bash
    npm start
    ```

The API should now be running at `http://localhost:3000`.

## Usage

You can interact with the API via HTTP requests using tools like **Postman** or **cURL**.

## API Endpoints

### `GET /api/books/get`
Fetch all books.

#### Response:
```json
{
  "success": true,
  "message": "List of books fetched successfully",
  "data": [
    { "id": 1, "title": "Book 1", "author": "Author 1", "year": 2022 },
    { "id": 2, "title": "Book 2", "author": "Author 2", "year": 2021 }
  ]
}

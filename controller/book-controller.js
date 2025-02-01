const Book = require('../model/book');

const getAllBooks = async (req, res) => {

    try{
        const allBooks = await Book.find({});
        if(allBooks?.length > 0){
            res.status(200).json({
                success: true,
                message: 'List of book fetched successfull!',
                data: allBooks
            });
        }else{
            res.status(400).json({
                success: false,
                message: 'No books found in collection'
            });
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Somthing went wrong! Please try again'
        });
    }

}

const getBook = async (req, res) => {
    
}

const addNewBook = async (req, res) => {
    try{
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        
        if(newBookFormData){
            res.status(201).json({
                success: true,
                message: "Book added successfully!",
                data: newlyCreatedBook
            });
        }
        
        
    }catch(e){
        console.error("Error adding book:", e.message); // Log the error
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: e.message
        });
    }
};

const updateBook = async (req, res) => {
    
}

const deleteBook = async (req, res) => {
    
}

module.exports = {getAllBooks, getBook, addNewBook, updateBook, deleteBook};
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
    try{
        const getBookId = req.params.id;
        const bookDetails = await Book.findById(getBookId);

        if(!bookDetails){
            return res.status(404).json({
                success: false,
                message: 'Book with the current ID is not found!'
            });
        }

        res.status(201).json({
            success: true,
            data: bookDetails
        });
    
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Somthing went wrong! Please try again'
        });
    }
}

const addNewBook = async (req, res) => {
    try{
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        
        if(newBookFormData){
            res.status(200).json({
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
    try{
        const updateBookFormData = req.body;
        const getBookId = req.params.id;
        const updateBook = await Book.findByIdAndUpdate(getBookId, updateBookFormData, {
            new: true
        });

        if(!updateBook){
            return res.status(404).json({
                success: false,
                message: 'Book with the current ID is not found!'
            });
        }

        res.status(200).json({
            success: true,
            data: updateBook
        });
    
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Somthing went wrong! Please try again'
        });
    }
}

const deleteBook = async (req, res) => {
    try{
        const getBookId = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(getBookId);

        if(!deleteBook){
            return res.status(404).json({
                success: false,
                message: 'Book with the current ID is not found!'
            });
        }

        res.status(201).json({
            success: true,
            data: deleteBook
        });
    
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Somthing went wrong! Please try again'
        });
    }
}

module.exports = {getAllBooks, getBook, addNewBook, updateBook, deleteBook};
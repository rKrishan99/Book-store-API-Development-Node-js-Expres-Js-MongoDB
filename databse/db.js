
const mongoose = require('mongoose');

const connectToDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://krishanjesin:rkw1234@cluster0.8uons.mongodb.net/');
        console.log('MongoDB is connected successfully!')
    }catch{
        console.error('Mongo connection failed!', error);
        process.exit(1); 
    }
};

module.exports = connectToDB;


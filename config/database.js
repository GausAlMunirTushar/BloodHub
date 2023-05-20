const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected MongoDB Database`)
    } catch (error) {
        console.log(`MongoDB Database Error ${error}`)
    }
}

module.exports = connectDB;
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://greatstack:nuwantha50+@cluster0.jkqllnz.mongodb.net/food-del');
        console.log('DB Connected');
    } catch (error) {
        console.error('Database Connection Error:', error.message);
        throw error;
    }
}
import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL;

    const {connection} = await mongoose.connect('mongodb+srv://cseshivangi599:82C3hezF7CK8Oybo@cluster0.ieqjxue.mongodb.net/?retryWrites=true&w=majority')
    console.log(`MongoDB Connected to ${connection.host}`);

}

import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB);
        console.log(`connected to database :${conn.connection.host}`)
        
    } catch (error) {
        console.log("error connecting to database:", error)
        
    }
}
module.exports = connectDB
   




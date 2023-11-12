import mongoose from 'mongoose';


export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nwekecynthia2015:08158802091@cluster0.is7jbgy.mongodb.net/cluster0?retryWrites=true&w=majority');
        console.log("connected to database")
        
    } catch (error) {
        console.log("error connecting to database:", error)
        
    }
}
   




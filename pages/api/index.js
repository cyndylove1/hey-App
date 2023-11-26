import  connectDB from '../../utils/mongodb'
import User from '../../models/user'
import bcrypt from "bcryptjs"


/**
 * 
 * @param {import ("next").NextApiRequest} req
 * @param {import ("next").NextApiResponse} res
 */
export default function POST (req, res) {
    
    connectDB()
    
    try {
        const { firstName,lastName,email,password,mobile,identificationNumber,identificationType,address,confirmPassword } = req.json()
        const hashedPassword = bcrypt.hash(password ,10)

        // connectDB();
        User.create({firstName,lastName,email,mobile,identificationNumber,identificationType,address,confirmPassword ,password: hashedPassword});

        return res.json({message:"User Registered"},{status:200});
        
    } catch (error) {
        return res.json({message:"An error occurred while registering"}, {status:500});

        
    }


    // res.status(200).json({name: "nweke cynthia chienye"})
}
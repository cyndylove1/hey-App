import  connectDB from '../../utils/mongodb'
import User from '../../models/user'
import bcrypt from "bcryptjs"
import { NextResponse } from 'next/server';


/**
 * 
 * @param {import ("next").NextApiRequest} req
 * @param {import ("next").NextApiResponse} res
 */

export default function POST (req, NextResponse) {
    
    connectDB();
    
    try {
        const { firstName,lastName,email,password,mobile,identificationNumber,identificationType,address,confirmPassword } = req.json()
        const hashedPassword = bcrypt.hash(password ,10)

        User.create({firstName,lastName,email,mobile,identificationNumber,identificationType,address,confirmPassword ,password: hashedPassword});

        return NextResponse.json({message:"User Registered"},{status:200});
        
    } catch (error) {
        return NextResponse.json({message:"An error occurred while registering"}, {status:500});

        
    }
    


    
}
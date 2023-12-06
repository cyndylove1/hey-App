import  connectDB from '../../../utils/mongodb'
import User from '../../../models/user'
import bcrypt from "bcryptjs"
import { NextResponse } from 'next/server'




export async function POST (req) {
    
    connectDB();
    
    try {
        const { firstName,lastName,email,password,mobile,identificationNumber,identificationType,address,confirmPassword } = await req.json()
        const hashedPassword = await bcrypt.hash(password ,10)

        User.create({firstName,lastName,email,mobile,identificationNumber,identificationType,address,confirmPassword ,password:hashed});

        return NextResponse.json({message:"User Registered"},{status:200});
        
    } catch (error) {
        return NextResponse.json({message:"An error ocurred while registering the user"}, {status:500});

        
    }
    


    
}
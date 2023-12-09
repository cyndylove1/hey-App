import  connectDB from '../../../utils/mongodb'
import User from '../../../models/user'
import bcrypt from "bcryptjs"
import { NextResponse } from 'next/server'




export async function POST (req) {
    const { firstName,lastName,email,password,mobile,identificationNumber,identificationType,address,confirmPassword } = await req.json()
    
    await connectDB();

    const existingUser = await User.findOne({email})

    if(existingUser){
        return new NextResponse("user already exists" ,{status:200})
    }
    const hashedPassword = await bcrypt.hash(password ,10)

    
    
    try {
       

        User.create({firstName,lastName,email,mobile,identificationNumber,identificationType,address,confirmPassword ,password:hashedPassword});

        return new NextResponse({message:"User Registered"},{status:200});
        
    } catch (error) {
        return new NextResponse({message:"An error ocurred while registering the user"}, {status:500});

        
    }
    


    
}
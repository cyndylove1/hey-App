import { connectDB } from '@/lib/mongodb'
import User from '@/models/user' 
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"


export async function POST(req){
    try {
        const { email,password } = await req.json()
        const hashedPassword = await bcrypt.hash(password ,10)

        await connectDB();
        await User.create({email, password: hashedPassword});

        return NextResponse.json({message:"User Registered"},{status:200});
        
    } catch (error) {
        return NextResponse.json({message:"An error occurred while registering"}, {status:500});

        
    }
}
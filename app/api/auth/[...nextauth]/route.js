import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import connectDB from "../../../../utils/mongodb"
import User from '../../../../models/user' 
import bcrypt from "bcryptjs"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
        
            async authorize(credentials) {
                // const user = { id: "1"}
                // return user;
                
                
                const {email, password} = credentials

                try {
                    await connectDB()
                    
                    const user = await User.findOne({email})

                    if(!user){
                        return null; 
                    }  
                    const passwordMatch = await bcrypt.compare(password, user.password)


                        if(!passwordMatch){
                            return null;
                        }  
                        return user;              
                    } catch (error) {
                        console.log("Error: ", error);
                        
                    }
                
            },

        }),
    ],
    session:{
        strategy:"jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/"
    },
};
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
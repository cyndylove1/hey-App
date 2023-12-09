import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import connectDB from "../../../../utils/mongodb"
import User from '../../../../models/user' 
import bcrypt from "bcryptjs"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credential:{},

            async authorize(credential) {
                const {email, password} = credential

                try {
                    await connectDB()
                    const user = await User.findOne({ email})

                    if(!user){
                        return null
                    }
                   const passwordMatch = await bcrypt.compare(password, user.password)

                   if(!passwordMatch){
                    return null;
                   }
                   return user;
                } catch (error) {
                    console.error("Error:", error);
                    
                }
                
            },

        }),
    ],
    session:{
        strategy:"jwt",
    },
    secret:process.env.NEXT_SECRET,
    pages:{
        signIn:"/About"
    },
};
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import connectDB from "../../../../utils/mongodb"
import User from '../../../../models/user' 
import bcrypt from "bcryptjs"

const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credential:{
                email:{ label: "Email",  type:"text" },
                password:{ label: "Password",  type:"password" }


            },

            async authorize(credential) {
                await connectDB()
                // const {email, password} = credential

                try {
                    
                    const user = await User.findOne({email})

                    if(user){
                        const passwordMatch = await bcrypt.compare(password, user.password)


                        if(passwordMatch){
                            return user;
                        }
                           

                        
                    }                  
                    } catch (error) {
                        throw new Error(error);
                        
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
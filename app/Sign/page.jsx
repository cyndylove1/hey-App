'use client'
import '../styles.css'
import '../globals.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

 export default function Sign (){
    const [error, setError] = useState("")
    const router = useRouter()

    const isValidEmail = (email) => {
        const emailRex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRex.test(email);

    }
    
    const handleSubmit  = async (e) =>{
        e.preventDefault()
        const firstName = e.target[0].value;
        const lastName = e.target[1].value
         const email  = e.target[2].value
        const mobile = e.target[3].value
        const identificationType = e.target[4].value
        const identificationNumber = e.target[5].value
        const address = e.target[6].value
        const password = e.target[7].value
        const confirmPassword = e.target[8].value
        
        


        if(!isValidEmail(email)){
            setError("Email is invalid" );
            return;
            

        }
        if(!password || password.length < 8){
            setError("password must contain 8 characters or more" );
            return;
            
        }


        try {

            // const resUserExit = await fetch('/api/userExit',{
            //     method: 'POST',
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({ email }),  
               
            // })
            // const { user } = await resUserExit.json()

            // if(user){
            //     return({
            //         success: false,
            //         message: "User Already Exists",

            //     });
                


            // }

           const res = await fetch('/api/users',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName,lastName,email,password,mobile,identificationNumber,identificationType,address,confirmPassword
                })
            })
            if(res.status === 400) {
                setError("Email already Exit")
            }if(res.status === 200) {
                setError("")
                router.push("/form");
                const form =e.target
                form.reset()
                
            }
            
            

        } catch (error) {
            setError("Error, Try again later" );
            console.log(error);
            
        }
        
        
    }
    return(
        <div>
        
            <div className="Sign-up">
                <div className="title">
                    <div className="Sign-title">
                        <h4>HeyWallet - Register</h4>

                    </div>
                    <div className="member">
                        <h6>Already a member - <span><a href="./form">Login</a></span></h6>

                    </div>
                    
                </div>
               
                <div className="Sign-page">
                    <form action="" className="Sign" onSubmit={handleSubmit}>
                       
                        <input type="text" placeholder='FirstName' className="sign-input" autoComplete='off' required/>
                        
                        <input type="text"  placeholder='LastName' className="sign-input" autoComplete='off' required/> <br />
                       
                        <input type="text" placeholder='Email' className="sign-input" autoComplete='off' required/>
                        
                        <input type="text" placeholder='Mobile' className="sign-input" autoComplete='off'  required/><br />

                        
                        
                        <select className="sign-input" placeholder='IdentificationType' type="Selection" autoComplete='off' required>
                            <option value="National ID">National ID</option>
                            <option value="Driver's Lisence">Driver's Lisence</option>
                        </select>

                        
                        <input type="text" placeholder='IdentificationNumber' className="sign-input" autoComplete='off' required /> 
                        
                        <input type="text" placeholder='Address' className="address"  autoComplete='off' required/>  <br/>
                        
                        <input type="password" placeholder='Password' className="sign-input" autoComplete='off' required/>
                       
                        <input type="password" placeholder='ConfirmPassword' className="sign-input"  autoComplete='off' required/> 

                        <button  type='submit' className="register">Register</button>

                        <p className='err'>{error && error}</p>
                        
                        
                    </form>

                    
                    
                </div>
                
            </div>
        </div>
    )
}
 'use client'
 import '../styles.css'
import '../globals.css'
 import {FaRegEyeSlash} from  'react-icons/fa6'
// import {FaGoogleWallet} from 'react-icons/fa6'
import {FaRegEye} from 'react-icons/fa6'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


 export default function Form(){
    // await new Promise(resolve => setTimeout(resolve, 3000))


    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [error , setError] = useState("")

    const router = useRouter()

    const handleSubmit  = async (e) =>{
        e.preventDefault();


        try {
            const res = await signIn("credentials",{
                email,password ,redirect:false,
            })
            if (res.error){
                setError("invalid credentials")
                return;
            }
            router.replace("Dashboard")
        } catch (error) {
            console.log(error)
            
        }

    }
    
    const [type,setType] = useState("password")
    const [icon,setIcon] = useState(FaRegEyeSlash)

    const handleToggle = ()=>{
        if(type==="password"){
            setIcon(FaRegEye)
            setType('text')
        }else{
            setIcon(FaRegEyeSlash)
            setType('password')
        }

      

        
    }

    return(
        
    <div className='form-paged'>
        <div className='form-section'> 
            <div className="form-page">
                
                <form action="" className="form" onSubmit={handleSubmit} data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                    <div className="form-title"><h4>HeyWallet-Login</h4></div>
                       

                        <label htmlFor="email">Email</label> <br />
                        <input type="text"onChange={(e) => setEmail (e.target.value)} value={email} placeholder="enter your email" required/> <br/>
                        <label htmlFor="Password">Password</label><br />
                        <div className='input'>
                            <div className='password'>
                                <input type={type}  onChange={(e) => setPassword (e.target.value)} value={password} placeholder="enter your password" required />
                                <span onClick={handleToggle}>{icon}</span>

                            </div>

                           

                        </div>
                        <div>
                            
                        </div>
                            
                            <h6>Not a member?<Link href={"/Sign"}><span>Sign Up</span></Link></h6>
                            
                        
                       
                            <button className="form-btn" type='submit'>Login</button>
                       
                        
                        <p className='err'>{error}</p>
                        
                    </form> 
            </div>
        </div>
        
    </div>

    )
}


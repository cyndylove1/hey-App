 'use client'
 import '../styles.css'
import '../globals.css'
 import {FaRegEyeSlash} from  'react-icons/fa6'
import {FaGoogleWallet} from 'react-icons/fa6'
import {FaRegEye} from 'react-icons/fa6'
import { useState } from 'react'
// import Navbar from '../Navbar/page'
// import Navbar from '../Navbar/page'

async function getData (){
    await new Promise (resolve => setTimeout(resolve , 3000)) 
}
 export default function Form(){
    
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
                
                <form action="" className="form">
                    <div className="form-title"><h4>HeyWallet-Login</h4></div>
                       

                        <label htmlFor="email">Email</label> <br />
                        <input type="text" placeholder="enter your email" required/> <br/>
                        <label htmlFor="Password">Password</label><br />
                        <div className='input'>
                            <div className='password'>
                                <input type={type} placeholder="enter your password" required />
                                <span onClick={handleToggle}>{icon}</span>

                            </div>

                           

                        </div>
                       
                        <h6>Not a member?<span><a href="./Sign">Sign Up</a></span></h6>
                        <button className="form-btn">Login</button>
                        {/* <h6 className="forget-password">ForgetPassword?</h6> */}
                    </form> 
            </div>
        </div>
        
    </div>

    )
}


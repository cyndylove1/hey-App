'use client'
import '../styles.css'
import '../globals.css'
import Navbar from '../Navbar/page'
import { useState } from 'react'
// import Link from 'next/link'

 export default function Sign (){
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [email , setEmail] = useState("")
    const [mobile , setMobile] = useState("")
    const [identificationNumber , setIdentificationNumber] = useState("")
    const [identificationType , setIdentificationType] = useState("")
    const [address , setAddress] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")

    const handleSubmit  = async (e) =>{
        e.preventDefault()
        try {
           const res = await fetch('/api',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName,lastName,email,password,mobile,identificationNumber,identificationType,address,confirmPassword
                })
            })
            if (res.ok){
                const form = e.target;
                form.reset()
            }else{
                console.log("User registration Failed")
            }
        } catch (error) {
            console.log("User registration Failed", error);
            
        }
        
        // axios.post("http://localhost:3000/Sign",{firstName, lastName, email,mobile, identificationNumber, identificationType ,address, password,confirmPassword})
        // .then(res =>{
        //     router.push('/form')
        // }).catch(err => console.log(err))
        

    }
    return(
        <div>
            {/* <Navbar/> */}
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
                        <label htmlFor="first" className="sign-label" >FirstName</label> 
                        <input type="text" className="sign-input" autoComplete='off' onChange={(e) => setFirstName (e.target.value)} value={firstName} required/>
                        <label htmlFor="last" className="sign-label">LastName</label> 
                        <input type="text" className="sign-input" autoComplete='off' onChange={(e) => setLastName (e.target.value)} value={lastName} required/> <br />
                        <label htmlFor="email" className="sign-label">Email</label> 
                        <input type="text" className="sign-input" autoComplete='off' onChange={(e) => setEmail (e.target.value)} value={email} required/>
                        <label htmlFor="mobile" className="sign-label">Mobile</label>
                        <input type="number" className="sign-input" autoComplete='off' onChange={(e) => setMobile (e.target.value)}value={mobile} required/><br />

                        <label htmlFor="identification Type" className="sign-label">Identification Type</label>
                        
                        <select className="select" type="Selection" autoComplete='off' onChange={(e) => setIdentificationType (e.target.value)} value={identificationType}>
                            <option value="">National ID</option>
                            <option value="">Driver's Lisence</option>
                        </select>

                        <label htmlFor="identification number" className="sign-label">identification number</label>
                        <input type="number" className="select" autoComplete='off' onChange={(e) => setIdentificationNumber (e.target.value)}value={identificationNumber} required /> 
                        <label htmlFor="Address" className="sign-label">Address</label> <br />
                        <input type="text" className="address"  autoComplete='off' onChange={(e) => setAddress (e.target.value)} value={address} required/>  <br/>
                        <label htmlFor="password" className="sign-label">Password</label> 
                        <input type="password" className="select" autoComplete='off' onChange={(e) => setPassword (e.target.value)} value={password} required/>
                        <label htmlFor="Confirm" className="sign-label">Confirm Password</label>
                        <input type="password" className="select"  autoComplete='off' onChange={(e) => setConfirmPassword (e.target.value)} value={confirmPassword} required/> 

                        <button  type='submit' className="register">Register</button>
                        {/* <Link href="/form"><button  type='submit' className="register">Register</button></Link> */}
                        
                    </form>

                    
                    
                </div>
                
            </div>
        </div>
    )
}
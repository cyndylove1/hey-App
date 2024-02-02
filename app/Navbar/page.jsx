'use client'
import '../globals.css'
import '../styles.css'
import {FaGoogleWallet} from 'react-icons/fa6'
import Link from 'next/link';
 import { useState } from 'react'
 import { FaBarsStaggered } from "react-icons/fa6"; 
 import { LiaTimesSolid } from "react-icons/lia"
 import {signIn , signOut, useSession} from "next-auth/react"

 
 

export default function Navbar() {
    const {session , loading} = useSession()
    console.log ({session, loading})
    
   
    const [menu, setMenu] = useState("hidden")
    const [bar, setBar] = useState(FaBarsStaggered)
    const [clicked,setClicked] = useState(false)

    const handleClick = ()=>{
        if(menu === "hidden"){
            setBar(LiaTimesSolid)
            setMenu(FaBarsStaggered)
            setClicked(!clicked)
            
            
        
        }else{
            setBar(FaBarsStaggered)
            setMenu("hidden")
            setClicked(!clicked)
           
        }

      

        
    }
    



    // const  [color, setColor] = useState(false)
    //  const changeColor = () =>{
    //     if(window.scrollY >= 90){
    //         setColor(true)
    //    }else{
    //         setColor(false)
    //     }

    //  }
    // window.addEventListener('scroll', changeColor)
        
    

    

    return(
        <header>
            
             <div className="logo">
                 <h2><span className='fa'><FaGoogleWallet/></span>HEYWALLET</h2>

            </div>
             {/* <div className="logo3">
                 <h2><span className='fa2'><FaGoogleWallet/></span>HEYWALLET</h2>

            </div> */}


            <nav className="navbar">
                <ul className={clicked ? "navbar ul active" : "navbar ul"}>

                    <Link style={{textDecoration: 'none'}}href="/"><li>Home</li></Link>
                    <Link style={{textDecoration: 'none'}} href="/About"><li>About</li></Link>
                    <Link  style={{textDecoration: 'none'}}href="/service"><li>Services</li></Link>
                    <Link  style={{textDecoration: 'none'}}href="/blog"><li>WhyUs</li></Link>
                    <Link style={{textDecoration: 'none'}} href="/Team"><li>Team</li></Link>
                    <Link style={{textDecoration: 'none'}} href="/Testimonial"><li>Testimonial</li></Link>
                    {/* <Link style={{textDecoration: 'none'}} href="/Dashboard"><li>dashboard</li></Link> */}
                        
                   

                     {!session ? (
                        <>
                        
                                                                 
                    <Link href="/form">
                        <button className='btn'>Login</button>
                    </Link>
                     </>
                     ):(
                        <>
                        {session.user.email}
                        <li>
                            <button onClick={()=>{
                                signOut()
                            }} className='btn'>logout</button>

                        </li>
                        </>
                     )}  


                     
                  
                
                    
                </ul>
                <div className="mobile" onClick={handleClick}>
                        {bar} 
                        
                </div>
                
            

            </nav>





           
        
    </header> 
        
                
        
    
    
    )
}

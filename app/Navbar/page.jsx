'use client'
import '../globals.css'
import '../styles.css'
import {FaGoogleWallet} from 'react-icons/fa6'
import Link from 'next/link';
 import { useState } from 'react' 
 
 

export default function Navbar() {
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


            <nav className="navbar">
                <ul>
                    
                    
                    
                    <Link style={{textDecoration: 'none'}}href="/"><li>Home</li></Link>
                    <Link style={{textDecoration: 'none'}} href="/About"><li>About</li></Link>
                    <Link  style={{textDecoration: 'none'}}href="/service"><li>Services</li></Link>
                    <Link  style={{textDecoration: 'none'}}href="/blog"><li>WhyUs</li></Link>
                    <Link style={{textDecoration: 'none'}} href="/Team"><li>Team</li></Link>
                    <Link style={{textDecoration: 'none'}} href="/Testimonial"><li>Testimonial</li></Link>
                        
                   

                                                                   
                    <Link href="/form">
                        <button className='btn'>Login</button>
                    </Link>
                  
                    
                </ul>

            </nav>



           
        
    </header> 
        
                
        
    
    
    )
}
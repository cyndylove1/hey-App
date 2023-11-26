'use client'
import '../globals.css'
import '../styles.css'
import {FaGoogleWallet} from 'react-icons/fa6'
import {FaFacebookF} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa6";
import {FaLinkedinIn} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6"
// import ScrollReveal from 'scrollreveal';


export default function Footer (){

    // const sr = ScrollReveal ({
    //     distance: '60px',
    //     duration: 2000,
    //     reset: true
    
    //  })
    //  sr.reveal('.footer-container',{delay:350, origin:'bottom'})
    return(
        <div>
            <div className='footer-section'>
                <div className='footer-container'>
                    <div className='logo2'>
                        <h2><span className='fa'><FaGoogleWallet/></span>HEYWALLET</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Eum doloremque, dolorem <br /> assumenda labore animi aliquid?</p>
                        

                    </div>
                    <div className='footer-content'>
                        <h4>Socials</h4>
                        <h6>Josephineallard@gmail.com</h6>
                        <div className="social-footer"> 
                            <h5><FaFacebookF/></h5>
                            <h5><FaTwitter/></h5>
                            <h5><FaLinkedinIn/></h5>
                            <h5><FaInstagram/></h5>

                        </div>

                    </div>
                    <div className='quick-links'>
                    <h5>Quick Links</h5>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/About'>About</a></li>
                    <li><a href='/service'>Services</a></li>
                    <li><a href='/blog'>WhyUs</a></li>
                    <li><a href='/Team'>Team</a></li>
                    <li><a href='/Testimonial'>Testimonial</a></li>
                    <li><a href='/form'>Login</a></li>
                        {/* <h5>Quick Links</h5>
                        <h6>Home</h6>
                        <h6>About</h6>
                        <h6>Service</h6>
                        <h6>Why Us</h6>
                        <h6>Team</h6>
                        <h6>Testimonial</h6>
                        <h6>Login</h6> */}

                        
                    </div>
                    <div className='location'>
                        <h5>Location & Contact</h5>
                        <p>2118 Thornridge Cir. Syracuse, <br/> Connecticut 35624 <br />(704) 555-0127</p>


                    </div>
                   

                </div>
                <p className='copy'> &copy; 2022-2023 HeyWallet</p>
            </div>
        </div>
    )
        
    
}
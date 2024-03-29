 'use client'
 import '../globals.css'
import '../styles.css'
 import Image from "next/image"
 import about from '@/public/images/hey wallet.png';
 import {TbBinaryTree2} from "react-icons/tb"
import {TbBiohazard} from "react-icons/tb"
import {TbAssembly} from "react-icons/tb"
import {TbAsterisk} from "react-icons/tb"
import {TbAward} from "react-icons/tb"
import {TbBadgeFilled} from "react-icons/tb"
import { motion } from 'framer-motion';
// import ScrollReveal from 'scrollreveal';






    // const res = await fetch('https://localhost:3000/About',{
    //     next: {
    //         revalidate: 0
    //     }

    // })
    // return res.json()


 export default function About () {
    // await new Promise(resolve => setTimeout(resolve, 3000))

    // const about = await About()
   
    
    return(
        <div>
            <div className="about">
                    
                    
                <div className="about-us">
                    <h2 className="" data-aos="fade-up" data-aos-duration="3000">HeyWallet Features</h2>
                    <p className='' data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Esse, autem.</p>
                </div>
                <div className="about-container">

                    <div className="about-img">
                            
                        <Image src={about} alt="heyWallet image"  className="img5"/>
                    </div>
                    
                <div className="about-section">
                    <div className="about-text">
                        <div className="about-info">
                            <div className="icon">
                                <h2><TbBinaryTree2/></h2>
                            </div>
                            <div className="content">
                                <h5>Non-custodial</h5>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime  sint blanditiis eos alias?</h6>
                                

                            </div>

                            

                        </div>
                        <div className="about-info">
                            <div className="icon">
                                <h2><TbBiohazard/></h2>
                            </div>
                            <div className="content">
                                <h5>HeyWallet</h5>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime sint blanditiis eos alias?</h6>


                            </div>

                            

                        </div>
                        <div className="about-info">
                            <div className="icon">
                                <h2><TbAssembly/></h2>
                            </div>
                            <div className="content">
                                <h5>Exchange</h5>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime sint blanditiis eos alias?</h6>


                            </div>

                            

                        </div>
                    </div>
                </div>
                <div className="about-section2">
                    <div className="about-content">
                        <div className="about-info">
                            <div className="icon">
                                <h2><TbAsterisk/></h2>
                            </div>
                            <div className="content">
                                <h5>Adding Money</h5>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime sint blanditiis eos alias?</h6>
                                 
                                

                            </div>

                            

                        </div>
                        <div className="about-info">
                            <div className="icon">
                                <h2><TbBadgeFilled/></h2>
                            </div>
                            <div className="content">
                                <h5>Trade from Wallet</h5>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime sint blanditiis eos alias?</h6>


                            </div>

                            

                        </div>
                        <div className="about-info">
                            <div className="icon">
                                <h2><TbAward/></h2>
                            </div>
                            <div className="content">
                                <h5>Earn from Wallet</h5>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime sint blanditiis eos alias?</h6>


                            </div>

                            

                        </div>
                    </div>
                </div>
               
                    

                    



                </div>
                
            </div>
            
               
        
        </div>
    )
}
'use client'
import '../globals.css'
import '../styles.css'
import Image from "next/image"
import cta from "@/public/images/laptop.png"
import { PageWrapper } from '../page-wrapper'
// import ScrollReveal from 'scrollreveal'


export default function Cta (){
  
    return(
        <div>
             <PageWrapper/>
            <div className="cta">
                <div className="cta-container">
                    <div className="cta-section">
                        <div className="cta-text">
                            <h4 data-aos="fade-right" >You can securely store your cryptocurrency in Heywallet <br /> Crypto Wallet</h4>
                        </div>
                        <div className="cta-image"> 
                            <Image src={cta} className="cta-img" data-aos="fade-down"/>
                        </div>
                        <div className="cta-btn">
                            <button className="cta-btn2" data-aos="fade-left">Start use now</button>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}
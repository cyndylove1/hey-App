'use client'
import '../globals.css'
import '../styles.css'
import Image from "next/image"
import cta from "@/public/images/laptop.png"
import ScrollReveal from 'scrollreveal'


export default function Cta (){
    const sr = ScrollReveal ({
        distance: '60px',
        duration: 2000,
        reset: true
    
     })
     sr.reveal('.cta-text h4,.cta-img,.cta-btn2 ',{delay:350, origin:'bottom'})
    
    return(
        <div>
            <div className="cta">
                <div className="cta-container">
                    <div className="cta-section">
                        <div className="cta-text">
                            <h4>You can securely store your cryptocurrency in Heywallet <br /> Crypto Wallet</h4>
                        </div>
                        <div className="cta-image"> 
                            <Image src={cta} className="cta-img"/>
                        </div>
                        <div className="cta-btn">
                            <button className="cta-btn2">Start use now</button>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}
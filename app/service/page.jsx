'use client'
import '../globals.css'
import '../styles.css'
import Image from "next/image"
import icon1 from "@/public/images/s1.png"
import icon2 from "@/public/images/s2.png"
import icon3 from "@/public/images/s3.png"


export default function Services () {
    // await new Promise(resolve => setTimeout(resolve, 3000))

     
    
    return(
        <div>
            <div className="services">
                
                <div className="services-container">
                    <h2 className=''data-aos="fade-up" data-aos-duration="3000">Our Services</h2>
                    <p className=''data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quam!</p>

                </div>
                <div className="services-text">
                    <div className="services-content">
                        <div className="services-info" >     
                            <Image src={icon1} alt="" className="img2"/>
                            <h5>CURRENCY WALLET</h5>
                            <p>fact that a reader will be <br /> distracted by the readable  <br />content of a page when looking <br /> at its layout. The point of using</p>
                                

                        </div>
                        <div className="services-info">     
                            <Image src={icon2} alt="" className="img2"/>
                            <h5>SECURITY STORAGE</h5>
                            <p>fact that a reader will be <br /> distracted by the readable  <br />content of a page when looking <br /> at its layout. The point of using</p>
                                

                        </div>
                        <div className="services-info">     
                            <Image src={icon3} alt="" className="img2"/>
                            <h5>EXPERT SUPPORT</h5>
                            <p>fact that a reader will be <br /> distracted by the readable  <br />content of a page when looking <br /> at its layout. The point of using</p>
                                

                        </div>
                       
                    </div>
                    {/* <button className="view">View All</button> */}
                </div>
            </div>
        </div>
    )
}
'use client'
import '../globals.css'
import '../styles.css'
import Image from "next/image"
import team1 from "@/public/images/team-1.jpg";
import team2 from "@/public/images/team-2.jpg";
import team3 from "@/public/images/team-3.jpg";
import team4 from "@/public/images/team-4.jpg";
import {FaFacebookF} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa6";
import {FaLinkedinIn} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6"
// import ScrollReveal from 'scrollreveal';


export default function Team () {
    // const sr = ScrollReveal ({
    //     distance: '60px',
    //     duration: 2000,
    //     reset: true
    
    //  })
    //  sr.reveal('.team-container h2,.team-text',{delay:350, origin:'bottom'})
     
    
    return(
        <div>
            
            <div className="team">
                <div className="team-container">
                    <h2>Our Team</h2>
                </div>
                <div className="team-content">
                    <div className="team-info">
                        <div className="team-text">
                            
                            <Image src={team1} className="img4"/>
                            <h4>Joseph Brown</h4>
                            <h5>marketing Head</h5>
                            <div className="socials"> 
                                <h2><FaFacebookF/></h2>
                                <h2><FaTwitter/></h2>
                                <h2><FaLinkedinIn/></h2>
                                <h2><FaInstagram/></h2>

                            </div>

                        </div>
                        <div className="team-text">
                            <Image src={team2} className="img4"/>
                            <h4>Nancy White</h4>
                            <h5>marketing Head</h5>
                            <div className="socials"> 
                                <h2><FaFacebookF/></h2>
                                <h2><FaTwitter/></h2>
                                <h2><FaLinkedinIn/></h2>
                                <h2><FaInstagram/></h2>

                            </div>
                            

                        </div>
                        <div className="team-text">
                            <Image src={team3} className="img4"/>
                            <h4>Earl Martinez</h4>
                            <h5>marketing Head</h5>
                            <div className="socials"> 
                                <h2><FaFacebookF/></h2>
                                <h2><FaTwitter/></h2>
                                <h2><FaLinkedinIn/></h2>
                                <h2><FaInstagram/></h2>

                            </div>
                            

                        </div>
                        <div className="team-text">
                            <Image src={team4} className="img4"/>
                            <h4>Josephine Allard</h4>
                            <h5>marketing Head</h5>
                            <div className="socials"> 
                                <h2><FaFacebookF/></h2>
                                <h2><FaTwitter/></h2>
                                <h2><FaLinkedinIn/></h2>
                                <h2><FaInstagram/></h2>

                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
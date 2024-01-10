 'use client'
 import '../globals.css'
import '../styles.css'
 import Image from "next/image" 
 import blog from '@/public/images/100.png'
 import { PageWrapper } from '../page-wrapper'
//  import ScrollReveal from 'scrollreveal'


 export default async function Blog () {
    await new Promise(resolve => setTimeout(resolve, 3000))

    // const sr = ScrollReveal ({
    //     distance: '60px',
    //     duration: 2000,
    //     reset: true
    
    //  })
    //  sr.reveal('.blog-container h5,.blog-container p,.blog-container h2,.blog-text,.img3',{delay:350, origin:'bottom'})
     
    
    return(
        <div>
           
            <div className="blog">
                <div className="main-blog">
                    <div className="main-container">
                    <PageWrapper/>
                        <div className="blog-container">
                            <h5>WHY CHOOSE US?</h5>
                            <h2>Enterprise Blockchain Services  to Build a Better Future.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur  adipiscing elit,  sed do eiusmod  tempor.</p>

                            <div className="blog-info">
                                <div className="blog-content">
                                    <div className="blog-text">
                                        <ul>
                                            <li>
                                                <span> Payment Options</span>
                                                     
                                            </li>
                                            <li>
                                                <span>Competitive Commission</span>
                                            </li>
                                            <li>
                                                <span>Reliable order execution</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="blog-text">
                                        <ul>
                                            <li>
                                                <span>Strong Security</span>
                                            </li>
                                            <li>
                                                <span>24/7 Support</span>
                                            </li>
                                            <li>
                                                <span>Range of Api solutions</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        </div>

                    </div>
                        
                        <div className="blog-img">
                            <Image src={blog} className="img3"/>

                        </div>

                    </div>
                   

                </div>
                    
                
            </div>
        </div>
    )
}
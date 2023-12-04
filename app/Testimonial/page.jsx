"use client"
import '../globals.css'
import '../styles.css'
import Image from "next/image"
import client1 from "@/public/images/client1.jpg"
import client2 from "@/public/images/client2.jpg"
import {BsQuote} from "react-icons/bs"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import {Pagination, Autoplay } from 'swiper/modules';
// import { PageWrapper } from '../page-wrapper'
// import ScrollReveal from 'scrollreveal'

export default function Testimonial(){
    // const sr = ScrollReveal ({
    //     distance: '60px',
    //     duration: 2000,
    //     reset: true
    
    //  })
    //  sr.reveal('.testimonial-title h2',{delay:350, origin:'bottom'})
     
    return(
        <div>
             {/* <PageWrapper/> */}
             <div className="testimonial-title">
                    <h2>What Says Our Customers</h2>
                </div>
            <Swiper
                // slidesPerView={3}
                loop={true}
                autoplay={{delay:2000,  disableOnInteraction:false,}}
                spaceBetween={20}
                 pagination={{
                    clickable: true,

                    
                 }}
                  
                 modules={[Pagination , Autoplay ]}
                // slidesPerView={3}
               
                // navigation={true}
                // modules={[Navigation, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    0:  {
                        slidesPerView : 1,
                        spaceBetween: 10
                    },
                    768:  {
                        slidesPerView : 2,
                        spaceBetween: 10
                    },
                    1024:  {
                        slidesPerView : 3,
                        spaceBetween: 10
                    },
                    
                }}
            
                >
                
                

               
            <div className="testimonial">
               
                <div className="testimonial-container">
                    <SwiperSlide>
                    <div className="testimonial-content">
                        <div className="testimonial-info">
                            <div> <Image src={client1} className="client-img"/></div>
                           
                            <div className="testimonial-text">
                                <div className="testimonial-text1">
                                    <h5>LusDen</h5>
                                    <p>magna aliqua. Ut</p>
                                </div>
                                <div className="testimonial-quote">
                                    <h5><BsQuote/></h5>

                                </div>
                            </div>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quia illum dolor nihil expedita  perferendis ipsum molestias nobis reiciendis  est saepe? Illo, consequatur assumenda quo rerum quidem</p>

                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="testimonial-content">
                        <div className="testimonial-info">
                            <div> <Image src={client1} className="client-img"/></div>
                           
                            <div className="testimonial-text">
                                <div className="testimonial-text1">
                                    <h5>LusDen</h5>
                                    <p>magna aliqua. Ut</p>
                                </div>
                                <div className="testimonial-quote">
                                    <h5><BsQuote/></h5>

                                </div>
                            </div>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quia illum dolor nihil expedita  perferendis ipsum molestias nobis reiciendis  est saepe? Illo, consequatur assumenda quo rerum quidem</p>

                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="testimonial-content">
                        <div className="testimonial-info">
                            <div> <Image src={client2} className="client-img"/></div>
                           
                            <div className="testimonial-text">
                                <div className="testimonial-text1">
                                    <h5>Zen Court</h5>
                                    <p>magna aliqua. Ut</p>
                                </div>
                                <div className="testimonial-quote">
                                    <h5><BsQuote/></h5>

                                </div>
                            </div>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quia illum dolor nihil expedita  perferendis ipsum molestias nobis reiciendis  est saepe? Illo, consequatur assumenda quo rerum quidem</p>

                        </div>
                    </div>
                    </SwiperSlide>
                </div>
            </div>
            
                

               
            <div className="testimonial">
                {/* <div className="testimonial-title">
                    <h2>What Says Our Customers</h2>
                </div> */}
                <div className="testimonial-container">
                    <SwiperSlide>
                    <div className="testimonial-content">
                        <div className="testimonial-info">
                            <div> <Image src={client1} className="client-img"/></div>
                           
                            <div className="testimonial-text">
                                <div className="testimonial-text1">
                                    <h5>LusDen</h5>
                                    <p>magna aliqua. Ut</p>
                                </div>
                                <div className="testimonial-quote">
                                    <h5><BsQuote/></h5>

                                </div>
                            </div>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum dolor nihil expedita  perferendis ipsum molestias nobis reiciendis  est saepe? Illo, consequatur assumenda quo rerum quidem</p>

                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="testimonial-content">
                        <div className="testimonial-info">
                            <div> <Image src={client2} className="client-img"/></div>
                           
                            <div className="testimonial-text">
                                <div className="testimonial-text1">
                                    <h5>Zen Court</h5>
                                    <p>magna aliqua. Ut</p>
                                </div>
                                <div className="testimonial-quote">
                                    <h5><BsQuote/></h5>

                                </div>
                            </div>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum dolor nihil expedita perferendis ipsum molestias nobis reiciendis est saepe? Illo, consequatur assumenda quo rerum quidem</p>

                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="testimonial-content">
                        <div className="testimonial-info">
                            <div> <Image src={client2} className="client-img"/></div>
                           
                            <div className="testimonial-text">
                                <div className="testimonial-text1">
                                    <h5>Zen Court</h5>
                                    <p>magna aliqua. Ut</p>
                                </div>
                                <div className="testimonial-quote">
                                    <h5><BsQuote/></h5>

                                </div>
                            </div>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum dolor nihil expedita perferendis ipsum molestias nobis reiciendis est saepe? Illo, consequatur assumenda quo rerum quidem</p>

                        </div>
                    </div>
                    </SwiperSlide>
                </div>
            </div>
            {/* </SwiperSlide> */}
            </Swiper>
            
        </div>
        
    )
}
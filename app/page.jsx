'use client'

import Hero from './Hero/page'
import About from './About/page'
import Services from './service/page'
import Blog from './blog/page'
import Team from './Team/page'
import Testimonial from './Testimonial/page'
import Cta from './Cta/page'
import { React , useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'





export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration:800,
      once:false,
    })

  }, [])
  return (
    <main> 

      <Hero/>
      <About/>
      <Services/>
      <Blog/>
      <Team/>
      <Testimonial/>
      <Cta/> 

    </main>
  )
}

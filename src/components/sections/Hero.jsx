import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ChevronDown, Star } from 'lucide-react'
import { PERSONAL_INFO, STATS } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'
import { SiMongodb, SiJavascript, SiReact, SiPython } from 'react-icons/si'
import MeCoding from "../../assets/images/me-coding-2.PNG"

const Hero = () => {
  const headingRef = useRef(null)
  
  useEffect(() => {
  const headings = gsap.utils.toArray(
    headingRef.current.querySelectorAll(".tagline")
  )

  gsap.set(headings, {
    xPercent: 100,
    "--t": "100%",
  })

  const tl = gsap.timeline({ repeat: -1 })

  headings.forEach((heading) => {
    tl
      // slide in (gray)
      .to(heading, {
        xPercent: 0,
        duration: 0.7,
        ease: "power3.out",
      })

      // fill gray → white
      .to(heading, {
        "--t": "0%",
        duration: 1,
        ease: "expo.out"
      })

      // hold fully white
      .to({}, { duration: 1 })

      // slide out while still white
      .to(heading, {
        xPercent: -100,
        duration: 0.7,
        ease: "power3.in",
      })

      // reset for next cycle
      .set(heading, {
        xPercent: 100,
        "--t": "100%",
      })
  })

  return () => tl.kill()
 }, [])



  return (
   <section className='relative min-h-screen flex items-center overflow-hidden bg-black'>
   <RadialGradientBackground variant="hero" />

   <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20 w-full'>
     <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start lg:items-center min-h-[calc(100vh-4rem)] lg:min-h-0'>
       
       {/* Left Column */}
       <div className='text-left pt-15 sm:pt-2 md:pt-16 lg:pt-0'>
         
         <FadeIn delay={0}>
           <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 md:mb-8 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full'>
             <Star className='w-3 h-3 md:w-4 md:h-4 text-white fill-white' />
             <span className='text-xs md:text-sm text-white tracking-wide'>
               {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
             </span>
           </div>
         </FadeIn>

         <FadeIn delay={100}>
           <div className="flex flex-col">
             <div className="">
               <h2 className="font-normal text-l md:text-2xl">I build with:</h2>
             </div>
             <div ref={headingRef} className="container">
               <h1 className="tagline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold" data-word="Perspective">
                 Perspective
               </h1>
               <h1 className="tagline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold" data-word="Creativity">
                 Creativity
               </h1>
               <h1 className="tagline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold" data-word="Innovation">
                 Innovation
               </h1>
             </div>
           </div>
         </FadeIn>

         <FadeIn delay={200}>
           <p className='text-base md:text-lg text-white/70 max-w-xl md:mt-0'>
             I design and build intelligent systems that simplify complexity, automate real work, and turn ambitious ideas into scalable digital products.
             From AI-powered workflows to full-stack applications, I blend engineering precision with creative thinking to build solutions that actually move businesses forward.
           </p>
         </FadeIn>

         <FadeIn delay={300}>
           <button
             onClick={() => scrollToSection('contact')}
             className='inline-flex items-center group mt-6 md:mt-10'
           >
             <div className='relative z-10 bg-white text-black rounded-xl px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-medium border border-white hover:bg-primary hover:text-black transition-all duration-300'>
               Let’s Build Something Intelligent
             </div>
           </button>
         </FadeIn>

         <FadeIn delay={400}>
           <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16'>
                {STATS.map((stat, index) => (
                  <div key={index} className='text-left border-r border-white/50 pr-10 last:border-r-0'>
                    <div className='text-2xl font-mono text-primary mb-2'>
                      {stat.value}
                    </div>
                    <p className='text-sm text-white leading-snug'>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
         </FadeIn>
       </div>

       {/* Right Column */}
       <FadeIn delay={200}>
         <div className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-0">
           <div className="relative overflow-hidden rounded-2xl aspect-[4/5] max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] mx-auto lg:ml-auto group">
             <div className="absolute inset-0 rounded-2xl overflow-hidden">
               <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-[var(--animate-spin-slow)] rounded-2xl"></div>
             </div>

             {/* Image Container */}
             <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
               <img
                 src={MeCoding}
                 alt="Me coding"
                 className="w-full h-full object-cover"
               />
             </div>

             {/* Technology Logos */}
             <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20">
               <FadeIn delay={500}>
                 <div className="flex items-center gap-3 sm:gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                   <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                     <SiJavascript className="w-full h-full text-primary" />
                   </div>

                   <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                     <SiPython className="w-full h-full text-primary" />
                   </div>

                   <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                     <SiReact className="w-full h-full text-primary" />
                   </div>

                   <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                     <SiMongodb className="w-full h-full text-primary" />
                   </div>
                 </div>
               </FadeIn>
             </div>
           </div>
         </div>
       </FadeIn>
     </div>
   </div>

   {/* Scroll Indicator */}
   <button 
     onClick={() => scrollToSection('about')}
     className="absolute bottom-0.5 md:bottom-8 left-1/2 -translate-x-1/2 md:-translate-x-12 animate-bounce"
   >
     <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-primary" />
   </button>
 </section>
  )
}

export default Hero
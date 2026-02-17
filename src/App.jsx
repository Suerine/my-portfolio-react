import React from 'react'
import Navbar from "../src/components/layout/NavBar"
import Hero from "../src/components/sections/Hero"
import About from "../src/components/sections/About"
import Skills from "../src/components/sections/Skills"
import Projects from "../src/components/sections/Projects"

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh]'>
     <Navbar />

     <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
     </main>
    </div>
  )
}

export default App
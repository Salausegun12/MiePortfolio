import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar/>
      <main>
        <section id='hero'>
          <Hero />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contact'>
          <Contact/>
        </section>
      </main>
    </div>
  )
}

export default App
import React from 'react'
import {  ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id='home' className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center text-center'>
        <div>
            {/* main content */}
            <div className='space-y-6'>
                <div className='space-y-2'>
                    <h2 className='font-normal text-4xl md:text-5xl text-purple-300'>Hello, I'm</h2>
                    <h1 className='text-5xl lg:text-8xl leading md:text-7xl font-extrabold'>Shegzy Coder</h1>
                </div>
                <p className='text-sm md:text-xl lg:text-2xl text-gray-300 leading-right'>Full-Stack Developer crafting digital experiences with modern technologies</p>

                {/* cta button */}
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-12'>
                    <button className='py-4 px-8 text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200 rounded-lg font-medium'>View My Work</button>
                    <button className='py-4 px-9 text-white bg-gray-900 hover:bg-gray-950 transition-colors duration-200 rounded-lg font-medium'>Get In Touch</button>
                </div>

                {/* Down Arrow */}
                <div className='mt-18'>
                    <ChevronDown className='w-8 h-8 text-gray-400 hover:text-white mx-auto animate-bounce' />
                </div>

                {/* social icons */}
                <div className='flex justify-center space-x-8 mt-8'>
                    <a href="#">
                        <Github className='w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200'/>
                    </a>
                    <a href="#">
                        <Linkedin className='w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200'/>
                    </a>
                    <a href="#">
                        <Mail className='w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200'/>
                    </a>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero
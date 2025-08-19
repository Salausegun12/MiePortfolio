import React from 'react'
import segunImage from '../assets/segun.png'

const About = () => {
  return (
    <section id='about' className='bg-gray-100 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
                <h2 className='font-bold text-4xl md:text-5xl text-gray-900 mb-4 '>About Me</h2>
                <p className='font-normal text-lg'>I’m a passionate Full-Stack Developer who loves turning ideas into fast, functional, and user-friendly web applications 🚀</p>
            </div>

            <div className='grid md:grid-cols-2 gap-12 items-center'>
                <div>
                    <img src={segunImage} alt="" className='rounded-full'/>
                </div>

                <div className='space-y-6'>
                    <p className='text-lg text-gray-700 leading-relaxed'>I am skilled in both front-end and back-end development, I enjoy crafting clean code, seamless user experiences, and scalable solutions. My goal is to build digital products that not only work but make an impact.</p>

                    <p className='text-lg text-gray-700 leading-relaxed'>
                        Whether it’s crafting sleek user interfaces or engineering powerful back-end systems, I love building things that are fast, functional, and fun to use. For me, coding isn’t just work—it’s a way of creating meaningful solutions that make life easier.
                    </p>

                    <div className='flex flex-wrap gap-4 mt-8'>
                        <span className='text-white bg-purple-500 py-2 px-4 hover:bg-purple-600 rounded-xl'>HTML5</span>
                        <span className='text-white bg-purple-500 py-2 px-4 hover:bg-purple-600 rounded-xl'>CSS</span>
                        <span className='text-white bg-purple-500 py-2 px-4 hover:bg-purple-600 rounded-xl'>TailwindCSS</span>
                        <span className='text-white bg-purple-500 py-2 px-4 hover:bg-purple-600 rounded-xl'>ReactJS</span>
                    
                    </div>
                </div>

            </div>
        </div>
    </section>
    
  )
}

export default About
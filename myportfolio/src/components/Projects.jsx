import React from 'react'
import logoMaker from '../assets/logomaker.png'

const Projects = () => {
    const projects = [
        {
            title: 'E-commerce Platform',
            description: 'Created with pure tailwindcss',
            image: <img src={logoMaker} alt="" />,
            tech: ['HTML5', 'CSS', 'Tailwindcss', 'ReactJS'],
            github:'#',
            live: '#'
        }, 

        {
            title: 'E-commerce Platform',
            description: 'Created with pure tailwindcss',
            image:'',
            tech: ['HTML5', 'CSS', 'Tailwindcss', 'ReactJS'],
            github:'#',
            live: '#'
        },
        {
            title: 'E-commerce Platform',
            description: 'Created with pure tailwindcss',
            image:'',
            tech: ['HTML5', 'CSS', 'Tailwindcss', 'ReactJS'],
            github:'#',
            live: '#'
        }
    ]
  return (
    <section id='projects' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'> Featured Projects</h2>
                <p>A showcase of my recent projects</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, index) => (
                    <div key={index} className='bg-white rounded-2xl '></div>
                ))}
            </div>

        </div>

    </section>
  )
}

export default Projects
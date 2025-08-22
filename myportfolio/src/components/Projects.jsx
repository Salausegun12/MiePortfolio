import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
    const projects = [
        {
            title: 'Logo Maker Platform',
            description: 'A quick logomaker for startup business in minutes. Created with HTML5 and CSS.',
            image: 'https://cdn.pixabay.com/photo/2025/08/17/14/19/sun-bride-9779936_960_720.jpg',
            tech: ['HTML5', 'CSS'],
            github:'#',
            live: 'https://vermillion-gumption-96b89b.netlify.app/'
        }, 

        {
            title: 'OrderUK Food Platform',
            description: 'Food ordering and delivery platform. Created with ure tailwindcss',
            image: 'https://cdn.pixabay.com/photo/2025/08/19/06/48/coneflower-9783184_1280.jpg',
            tech: ['Tailwindcss', 'Javascript'],
            github:'https://github.com/Salausegun12/Restaurant-food-landing',
            live: 'https://orderuk-food-restaurant.netlify.app/'
        },
        {
            title: 'Restaurant Landing Page - FOODIE',
            description: 'Landing page for FOODIE platform. Created with pure tailwindcss',
            image: 'https://cdn.pixabay.com/photo/2025/08/18/18/29/hydrangea-9782496_1280.jpg' ,
            tech: ['Tailwindcss', 'Javascript'],
            github:'https://github.com/Salausegun12/Restaurant-food-landing',
            live: 'https://food-restaurant10.netlify.app/'
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
                    <div key={index} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group'>
                        <div className='aspect-video overflow-hidden'>
                            <img src={project.image} 
                            alt={project.description} 
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />  
                        </div>

                        {/*  */}
                        <div className='p-6'>
                            <h3 className='text-lg font-semibold text-gray-900'>{project.title}</h3>
                            <p className='text-md font-normal text-gray-900'>{project.description}</p>

                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.tech.map((tech, index) => {
                                    return <span key={index} className='inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mt-2'>{tech}</span>
                                })}
                            </div>

                            <div className='flex gap-4'>
                                <a href={project.live} className='flex items-center text-gray-600 hover:text-blue-900 transition-colors'><ExternalLink size={30}/></a>

                                <a href={project.github} className='flex items-center text-gray-600 hover:text-blue-900 transition-colors'><Github size={30}/></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    </section>
  )
}

export default Projects
import React from 'react'

const Navbar = () => {
  return (
     <nav className='bg-gray-900/95 fixed top-0 right-0 left-0 z-50 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
            <div className='flex h-16 justify-between items-center'>
             <div className='flex-shrink-0'> 
                <p className='font-extrabold text-2xl text-white'>SC</p>
             </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline spaces-10'>
                    <a href="#home" className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium px-3 py-2'>Home</a>
                    <a href="#about" className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium px-3 py-2'>About</a>
                    <a href="#skills" className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium px-3 py-2'>Skills</a>
                    <a href="#projects" className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium px-3 py-2'>Projects</a>
                    <a href="#contact" className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium px-3 py-2'>Contact</a>
                </div>
              </div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar
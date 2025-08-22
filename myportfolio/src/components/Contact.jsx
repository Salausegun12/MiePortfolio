import React from 'react'
import {useState} from 'react'
import { Mail, MessageSquare, User, Linkedin, Github } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
    }

    const handleSubmit = () => {
        console.log('Form submitted:', formData)
        alert('Thank you for your enquiry! This is a test.')
        setFormData({name:'', email:'', message:''})
    }
  return (
    <section id='contact' className='py-20 bg-gray-50'>
        <div className='max-w-7xl w-full px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-8'>
                <h2 className='text-4xl md:text-3xl font-bold mt-4 text-gray-900'>Get In Touch</h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'>Ask a question or make enquiry? Reach out to ME.</p>
            </div>

            {/* Form Contact */}
            <div className='grid md:grid-cols-2 gap-12'>
                {/* contact form */}
                <div className='bg-white rounded-2xl shadow-lg p-8'>
                    <div className='space-y-6'>
                        <div className='relative'>
                            <label htmlFor="name" className='text-gray-900 font-medium'>Name</label>
                            <div className='mt-2 flex items-center gap-2 border rounded-lg p-3'>
                                <User size={20} className='text-gray-400'/>
                                <input 
                                type="text" 
                                id='name' 
                                value={formData.name} 
                                onChange={handleInputChange} 
                                className='w-full outline-none text-gray-900' 
                                placeholder='Your Name' />
                            </div>
                        </div>

                        <div className='relative'>
                            <label htmlFor="email" className='text-gray-900 font-medium'>Email</label>
                            <div className='mt-2 flex items-center gap-2 border rounded-lg p-3'>
                                <Mail size={20} className='text-gray-400'/>
                                <input 
                                type="email" 
                                id='name' 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                className='w-full outline-none text-gray-900' 
                                placeholder='Your Email' />
                            </div>
                        </div>

                        <div className='relative'>
                            <label htmlFor="message" className='text-gray-900 font-medium'>Message</label>
                            <div className='mt-2 flex items-start gap-2 border rounded-lg p-3'>
                                <MessageSquare size={20} className='text-gray-400 mt-1'/>
                                <textarea 
                                name="message" 
                                id='message' 
                                value={formData.message} 
                                onChange={handleInputChange} 
                                className='w-full outline-none text-gray-900 resize-none'
                                rows={4} 
                                placeholder='Your Message' />
                            </div>
                        </div>
                    </div>

                </div>

                {/* contact info */}
                <div className='flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-900 mb-6'>Connect with Shegzy</h3>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-4'>
                            <Mail size={24} className='text-blue-600'/>
                            <a href="https://mail.google.com/mail/u/0/#inbox" className='text-gray-600 hover:text-blue-600'>segunsalau5@gmail.com</a>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Github size={24} className='text-blue-600'/>
                            <a href="https://github.com/Salausegun12" className='text-gray-600 hover:text-blue-600'>SegunSalauGithub</a>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Linkedin size={24} className='text-blue-600'/>
                            <a href="" className='text-gray-600 hover:text-blue-600'>Salau Segun</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
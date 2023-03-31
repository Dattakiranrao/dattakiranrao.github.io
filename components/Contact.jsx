import Image from 'next/image'
import React from 'react'
import contact from '../public/assets/contact.jpg'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

export default function Contact() {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#46a5e9]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image className='rounded-xl hover:scale-105 ease-in duration-300 ' src={contact} alt="/" />
                            </div>
                            <div>
                                <h2 className='pt-6'>Pondari.Datta Kiran Rao</h2>
                                <p className='text-md py-1'>Full-Stack Developer / Machine Learning Engineer</p>
                                <p className='py-4'>I am available for Internship or Full-time positions in the field of web development and machine learning engineer. However, if you have any other questions, don't hesitate to contact me using the form either</p>
                                <div className='flex space-x-2 pt-4'>
                                    <FaMapMarkerAlt size={20} />
                                    <p>Tarnaka, Hyderabad, Telengana, India</p>
                                </div>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>connect with me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'><FaLinkedinIn /></div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'><FaGithub /></div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'><AiOutlineMail /></div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'><BsFillPersonLinesFill /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300' cols="30" rows="10"></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4 hover:scale-105 ease-in duration-300'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#379ee8]' size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

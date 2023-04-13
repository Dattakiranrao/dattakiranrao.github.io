import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'

export default function Main() {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>let's build something together</p>
                    <h1 className='py-4 text-gray-700'>Hi, i'm <span className='text-[#46a5e9]'>Datta Kiran</span></h1>
                    <h1 className='py-2 text-gray-700'>A Full-Stack Web Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto text-xl'>Frontend Developer / Backend Developer / ML Engineer</p>
                    <div className='flex items-center justify-between m-auto max-w-[330px] py-4'>
                        <Link target='_blank' href="https://www.linkedin.com/in/pondari-datta-kiran-24a6a0237/">
                            <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'><FaLinkedinIn /></div>
                        </Link>
                        <Link target='_blank' href='https://github.com/Dattakiranrao'>
                            <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'>
                                <FaGithub /></div>
                        </Link>
                        <Link target='_blank' href=''>
                            <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail /></div>
                        </Link>
                        <Link target='_blank' href=''>
                            <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill /></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

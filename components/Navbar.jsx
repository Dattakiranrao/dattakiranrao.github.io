import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Navbar() {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [])

    return (
        <>
            <div className={`fixed w-full h-15 bg-[#ecf0f3] z-[100] ${shadow ? 'shadow-xl' : ""}`}>
                <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                    <Link href='/'><Image src='/../public/assets/dk-black.png' alt="/" width='100' height='40' /></Link>
                    <div>
                        <ul className='hidden md:flex'>
                            <Link href='/' ><li className='ml-10 text-sm uppercase'>Home</li></Link>
                            <Link href='/#about' ><li className='ml-10 text-sm uppercase'>About</li></Link>
                            <Link href='/#skills' ><li className='ml-10 text-sm uppercase'>Skills</li></Link>
                            <Link href='/#projects' ><li className='ml-10 text-sm uppercase'>Projects</li></Link>
                            <Link href='/#contact' ><li className='ml-10 text-sm uppercase'>Contact</li></Link>
                        </ul>
                        <div onClick={handleNav} className='md:hidden'>
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                    <div className={nav ? "fixed left-0 top-0 w-[60%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"} >
                        <div>
                            <div className='flex w-full items-center justify-between'>
                                <Link href="/"><Image src="/../public/assets/dk-black.png" alt="/" width='87' height='35' /></Link>
                                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3'>
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className='bg-black h-[1px] w-[77px]' />
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className='uppercase'>
                                <Link href='/'><li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li></Link>
                                <Link href='/#about'><li onClick={() => setNav(false)} className='py-4 text-sm'>About</li></Link>
                                <Link href='/#skills'><li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li></Link>
                                <Link href='/#projects'><li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li></Link>
                                <Link href='/#contact'><li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li></Link>
                            </ul>
                            <div className='pt-40 '>
                                <p className='uppercase tracking-widest my-4 font-medium text-[#46a5e9]'>Let's Connect</p>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300'>
                                        <Link target='_blank' href='https://www.linkedin.com/in/pondari-datta-kiran-24a6a0237/'><FaLinkedinIn /></Link></div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300'>
                                        <Link target='_blank' href='https://github.com/Dattakiranrao'><FaGithub /></Link></div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300'>
                                        <Link target='_blank' href='/'><AiOutlineMail /></Link></div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300'>
                                        <Link target='_blank' href='/'><BsFillPersonLinesFill /></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

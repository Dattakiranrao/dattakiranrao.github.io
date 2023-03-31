import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='flex flex-col md:w-[700px] col-start-1 col-end-3 '>
                    {/* col-span-2 */}
                    <p className='uppercase text-xl tracking-widest text-[#46a5e9]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600 '>I'm a very ambitious full-stack developer looking for a role as a software developer with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
                    <p className='py-2 text-gray-600 '>I can also handle machine learning task's in areas related classification & regression and provide high-quality data-driven solutions </p>
                    <p className='py-2 text-gray-600 '>To describe me in one line. I'm quiet confident, naturally curious, and continuously work on improving my skill to provide fesable solutions to a problem.</p>
                    <Link target='_blank' href='https://github.com/Dattakiranrao?tab=repositories'><p className='py-2 text-[#46a5e9] hover:underline cursor-pointer'>Check out some of my latest project's</p></Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-items-center p-4 md:mt-8 hover:scale-105 ease-in duration-300'>
                    <Image className="rounded-xl" src="/../public/assets/about-gif.gif" alt="/" width={900} height={700} />
                </div>
            </div>
        </div>
    )
}

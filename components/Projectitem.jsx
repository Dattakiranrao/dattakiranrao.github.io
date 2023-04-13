import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Projectitem({ image, name, language, demoLink, projectLink }) {
    return (
        <>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#379ee8] to-[#76bcee]'>
                <Image className='rounded-xl group-hover:opacity-5' src={image} alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>{name}</h3>
                    <p className='pb-4 pt-3 text-white text-center'>{language}</p>
                    <div className='flex'>
                        <Link target='_blank' href={demoLink}>
                            <p className='text-center w-fit mx-2 p-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Demo</p>
                        </Link>
                        <Link target='_blank' href={projectLink}>
                            <p className='text-center w-fit mx-2 p-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

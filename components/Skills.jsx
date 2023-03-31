import Image from 'next/image'
import React from 'react'
import { Skillitem } from './Skillitem'
import { html, css, javascript, tailwind, github1, mongo, nextjs, react, django, fastApi, flask, ps, sklearn, tf, python, firebase } from '../public/assets/skills/index'

export default function Skills() {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#46a5e9]'>Skills</p>
                <h2 className='py-4'>What I can Do</h2>
                {/* arrange the languages before deploying */}
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <Skillitem image={html} name={'html'} width={64} height={64} />
                    <Skillitem image={css} name={'css'} width={64} height={64} />
                    <Skillitem image={tailwind} name={'tailwind'} width={64} height={64} />
                    <Skillitem image={javascript} name={'javascript'} width={64} height={64} />
                    <Skillitem image={react} name={'reactjs'} width={64} height={64} />
                    <Skillitem image={nextjs} name={'nextjs'} width={64} height={64} />
                    <Skillitem image={python} name={'python'} width={64} height={64} />
                    <Skillitem image={flask} name={'flask'} width={64} height={64} />
                    <Skillitem image={django} name={'django'} width={64} height={64} />
                    <Skillitem image={fastApi} name={'fastApi'} width={64} height={64} />
                    <Skillitem image={sklearn} name={'sklearn'} width={64} height={64} />
                    <Skillitem image={tf} name={'tensorflow'} width={64} height={64} />
                    <Skillitem image={mongo} name={'mongodb'} width={64} height={64} />
                    <Skillitem image={ps} name={'postgresql'} width={64} height={64} />
                    <Skillitem image={firebase} name={'firebase'} width={64} height={64} />
                    <Skillitem image={github1} name={'github'} width={64} height={64} />
                </div>
            </div>
        </div>
    )
}

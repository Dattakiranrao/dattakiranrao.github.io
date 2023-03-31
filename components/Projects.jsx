import React from 'react'
import Projectitem from './Projectitem'
import { aiProject, bankProject, netflixProject, weatherProject, todoProject, chatbotProject, blogProject, flappybirdProject } from '../public/assets/projects'

export default function Projects() {
    return (
        <div id='projects' className='w-full'>
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className='text-xl tracking-widest uppercase text-[#46a5e9]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <Projectitem image={aiProject} name={'Ai Website'} language={'React Js'} demoLink={'https://ai-website-clone.onrender.com/'} projectLink={'https://github.com/Dattakiranrao/ai-website-clone'} />
                    <Projectitem image={bankProject} name={'Bank Website'} language={'React Js'} demoLink={'https://bank-website-clone.onrender.com/'} projectLink={'https://github.com/Dattakiranrao/bank-website-clone'} />
                    <Projectitem image={netflixProject} name={'Netflix'} language={'React Js'} demoLink={'https://netflix-react-tailwind-fb.web.app/'} projectLink={'https://github.com/Dattakiranrao/netflix-app'} />
                    <Projectitem image={weatherProject} name={'Weather Report'} language={'Python'} demoLink={'https://flask-weather-app.onrender.com/'} projectLink={'https://github.com/Dattakiranrao/weather-flask-app'} />
                    <Projectitem image={todoProject} name={'Todo App'} language={'Python'} demoLink={'https://todo-app-u5m6.onrender.com/'} projectLink={'https://github.com/Dattakiranrao/todo-app'} />
                    <Projectitem image={chatbotProject} name={'Chatbot / Virtal Assistant '} language={'Python/ ML'} demoLink={'https://github.com/Dattakiranrao/ChatBot_AI'} projectLink={'https://github.com/Dattakiranrao/ChatBot_AI'} />
                    <Projectitem image={blogProject} name={'Blog'} language={'Python'} demoLink={'https://github.com/Dattakiranrao/blog'} projectLink={'https://github.com/Dattakiranrao/blog'} />
                    <Projectitem image={flappybirdProject} name={'Flappy Bird Ai'} language={'Python/ ML'} demoLink={'https://photos.google.com/share/AF1QipP_VeIf9Q-rd_VqMU66RFn1Iir1aqHIdD6uIJCMEoY0W7jg6BKhan19qXOkHIolYg?key=Q2ZWNjB5U0FKWk1XZW9YcXhlUnFkQmNWTWE2U1ZB'} projectLink={'https://github.com/Dattakiranrao/Flappybird_AI'} />

                </div>
            </div>
        </div>
    )
}

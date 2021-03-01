import { useRef, useEffect } from 'react'

import './resume.css'
import datum from '../data.json'
import type { Resume } from './resume/types'
import { Education, HeaderInfo, Skills, WorkExperience } from './resume/'

function MyResume() {
    const resume = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (resume.current) {
            resume.current.style.opacity = '1'
        }
    }, [])
    const data: Resume = datum

    return (
        <div ref={resume} id='resume'>
            <HeaderInfo data={data.basics} />
            <Skills skills={data.skills} />
            <WorkExperience experience={data.work} />
            <Education educations={data.education} />
            <section className='section languages margin1'>
                <header>
                    <h2 className='section-title'>Languages</h2>
                </header>
                <section id='languages'>
                    <div className='display'>
                        <h3 className='language'>English</h3>
                        <div className='item'>
                            <div className='level fluency fluent'>
                                <em>Fluent</em>
                                <div className='bar'></div>
                            </div>
                        </div>
                    </div>
                    <div className='display'>
                        <h3 className='language'>Spanish</h3>
                        <div className='item'>
                            <div className='level fluency native speaker'>
                                <em>Native speaker</em>
                                <div className='bar'></div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default MyResume

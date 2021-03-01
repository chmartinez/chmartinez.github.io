import { useRef, useEffect } from 'react'

import './resume.css'
import datum from '../../data.json'
import WorkExperienceItem from './WorkExperienceItem'
import HeaderInfo from './HeaderInfo'
import type { Resume } from './types'

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
            <section className='section skills margin1'>
                <header>
                    <h2 className='section-title'>Skills</h2>
                </header>
                <section id='skills'>
                    <div className='item'>
                        <div className='level master'>
                            <em>Master</em>
                            <div className='bar'></div>
                        </div>
                        <ul className='keywords'>
                            <li>Javascript</li>
                            <li>ES6</li>
                            <li>HTML5</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className='item'>
                        <div className='level advanced'>
                            <em>Advanced</em>
                            <div className='bar'></div>
                        </div>
                        <ul className='keywords'>
                            <li>React</li>
                            <li>Redux</li>
                            <li>CSS</li>
                            <li>styled-components</li>
                            <li>styled-jsx</li>
                            <li>react-testing-library</li>
                        </ul>
                    </div>
                    <div className='item'>
                        <div className='level intermediate'>
                            <em>Intermediate</em>
                            <div className='bar'></div>
                        </div>
                        <ul className='keywords'>
                            <li>Node</li>
                            <li>NextJS</li>
                            <li>React Native</li>
                            <li>MySql</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className='item'>
                        <div className='level beginner'>
                            <em>Beginner</em>
                            <div className='bar'></div>
                        </div>
                        <ul className='keywords'>
                            <li>Docker</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                </section>
            </section>

            <section className='section work-experience'>
                <header>
                    <h2 className='section-title'>
                        Work Experience{' '}
                        <span className='item-count'>({data.work.length})</span>
                    </h2>
                </header>
                <section id='work'>
                    {data.work.map((workExperienceItem, index) => (
                        <WorkExperienceItem
                            key={workExperienceItem.id}
                            item={workExperienceItem}
                            open={index === 0}
                        />
                    ))}
                </section>
            </section>

            <section className='section education'>
                <header>
                    <h2 className='section-title'>
                        Education <span className='item-count'>(1)</span>
                    </h2>
                </header>
                <section id='education'>
                    <header className='clear'>
                        <span className='space-left'>
                            <span className='fa fa-caret-down'></span>
                        </span>
                        <div className='header-left'>
                            <div className='studyType'>
                                MSc Degree in Computer Engineering
                            </div>
                            <div className='institution'>
                                Universidad Nacional de Córdoba
                            </div>
                        </div>
                        <div className='date'>
                            <span className='endDate'>- 2010</span>
                        </div>
                    </header>

                    <span className='location'>
                        <span className='fa fa-map-marker'></span>
                        <span className='city'>Córdoba,</span>
                        <span className='countryCode'>(Argentina)</span>
                        <span className='region'>Córdoba</span>
                    </span>

                    <div className='item display' style={{ opacity: 1 }}></div>
                </section>
            </section>

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

import { useRef, useEffect } from 'react'

import './resume.css'
import data from '../../data.json'
import WorkExperienceItem from './WorkExperienceItem'

function Resume() {
    const resume = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (resume.current) {
            resume.current.style.opacity = '1'
        }
    }, [])

    return (
        <div ref={resume} id='resume'>
            <header id='header' className='clear'>
                <div>
                    <h1 className='name'>Christian Martinez</h1>
                    <h2 className='label'>Senior Frontend Engineer</h2>
                </div>

                <span className='location'>
                    <span className='address'>Carrer del Bruc 94, </span>
                    <span className='postalCode'>08009, </span>
                    <span className='city'>Barcelona, </span>
                    <span className='region'>Barcelona </span>
                    <span className='countryCode'>Spain</span>
                </span>

                <div id='contact'>
                    <div className='email'>
                        <span className='fa fa-envelope-o'></span>
                        <a href='mailto:christian.dario.martinez@gmail.com'>
                            christian.dario.martinez@gmail.com
                        </a>
                    </div>
                    <div className='phone'>
                        <span className='fa fa-mobile'></span>
                        (+34) 634854678
                    </div>
                </div>

                <div id='profiles'>
                    <div className='item'>
                        <div className='username'>
                            <span className='fa fa-linkedin linkedin social'></span>
                            <span className='url'>
                                <a href='https://www.linkedin.com/in/christian-dario-martinez'>
                                    Christian Martinez
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='username'>
                            <span className='fa fa-twitter twitter social'></span>
                            <span className='url'>
                                <a href='https://twitter.com/with_hache'>
                                    Christian (with H)
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <section className='section main-summary'>
                <section>
                    <div>
                        <p>
                            My purpose is to use my knowledge in both Software
                            and Product Development to make a difference in
                            teams and products.{' '}
                        </p>
                        <p>
                            I believe that with my versatility, my experience,
                            and my 'keep-learning attitude', I'm capable of
                            improving not only the quality of a certain source
                            code but the processes involved and the coherence in
                            software teams.
                        </p>
                    </div>
                </section>
            </section>

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

export default Resume

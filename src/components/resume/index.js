import { useRef, useEffect } from 'react'

import './resume.css'

function Resume() {
    const resume = useRef()
    useEffect(() => {
        resume.current.style.opacity = 1
    }, [])

    return (
        <div ref={resume} id='resume'>
            <header id='header' className='clear'>
                <div>
                    <h1 className='name'>Christian Martinez</h1>
                    <h2 className='label'>Senior Frontend Engineer</h2>
                </div>

                <span className='location'>
                    <span className='address'>Carrer del Bruc 94,</span>
                    <span className='postalCode'>08009,</span>
                    <span className='city'>Barcelona,</span>
                    <span className='region'>Barcelona</span>
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

            <section className='section margin1'>
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

            <section className='section'>
                <header>
                    <h2 className='section-title'>
                        Work Experience <span className='item-count'>(7)</span>
                    </h2>
                </header>
                <section id='work'>
                    <header>
                        <span className='space-left'>
                            <span className='fa fa-caret-down'></span>
                        </span>
                        <div className='position'>Product Manager</div>
                        <div className='company'>
                            FREE NOW (formerly mytaxi)
                        </div>
                        <div className='date'>
                            <span className='startDate'>July 2019</span>
                            <span className='endDate'>- Current</span>
                        </div>
                    </header>

                    <span className='website'>
                        <a href='https://www.free-now.com'>
                            https://www.free-now.com
                        </a>
                    </span>

                    <ul className='keywords'>
                        <li>hypothesis testing</li>
                        <li>user-testing</li>
                        <li>discovery and delivery</li>
                        <li>Tableau</li>
                        <li>SQL</li>
                        <li>React</li>
                        <li>Git</li>
                    </ul>

                    <div className='item display' style={{ opacity: 1 }}>
                        <ul className='highlights'>
                            <li>
                                Building reports and tools to ensure proper
                                tasks and data tracking
                            </li>
                            <li>
                                Understanding and defining hypotheses/problems
                                worth solving
                            </li>
                            <li>
                                Defining the product roadmap and prioritizing
                                the backlog work of the technical team
                            </li>
                            <li>
                                Aligning both Discovery and Delivery teams to
                                make sure they understand the &#x27;why are we
                                doing what we&#x27;re doing&#x27;
                            </li>
                            <li>
                                Ensuring product quality of the team&#x27;s
                                deliverables
                            </li>
                        </ul>
                    </div>
                    <header>
                        <span className='space-left'>
                            <span className='fa fa-caret-right'></span>
                        </span>
                        <div className='position'>Senior Frontend Engineer</div>
                        <div className='company'>myTaxi - The Taxi App</div>
                        <div className='date'>
                            <span className='startDate'>July 2017</span>
                            <span className='endDate'>- March 2020</span>
                        </div>
                    </header>

                    <span className='website'>
                        <a href='https://www.mytaxi.com'>
                            https://www.mytaxi.com
                        </a>
                    </span>

                    <ul className='keywords'>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Redux</li>
                        <li>=-components</li>
                        <li>Docker</li>
                        <li>Node.js</li>
                        <li>Git</li>
                        <li>Flow &amp; Typescript</li>
                    </ul>

                    <div className='item display none' style={{ opacity: 0 }}>
                        <ul className='highlights'>
                            <li>
                                Implemented changes on products related to FREE
                                NOW Driver Registration and internal tooling
                                using React, Redux, styled-components, and
                                react-testing-lib
                            </li>
                            <li>
                                Implemented changes on an internal reusable
                                components library used by several tools across
                                the company
                            </li>
                            <li>
                                Implemented changes on a custom shareable
                                React-Native lib used by Driver App
                            </li>
                            <li>
                                Provided mentoring, guidance, and support for
                                junior developers in good testing practices,
                                including unit, integration, and E2E tests.
                            </li>
                        </ul>
                    </div>
                    <header>
                        <span className='space-left'>
                            <span className='fa fa-caret-right'></span>
                        </span>
                        <div className='position'>
                            Senior Frontend Engineer | Web UI Team Leader for
                        </div>
                        <div className='company'>Globant</div>
                        <div className='date'>
                            <span className='startDate'>July 2017</span>
                            <span className='endDate'>- February 2018</span>
                        </div>
                    </header>

                    <span className='website'>
                        <a href='http://www.espn.com/fantasy'>
                            http://www.espn.com/fantasy
                        </a>
                    </span>

                    <ul className='keywords'>
                        <li>React</li>
                        <li>React Storybook</li>
                        <li>Mobx</li>
                        <li>styled-jsx</li>
                        <li>NextJS</li>
                        <li>Enzyme &amp; Chai (for frontend testing)</li>
                        <li>CSS</li>
                        <li>CSS flexbox</li>
                        <li>Git</li>
                    </ul>

                    <div className='item display none' style={{ opacity: 0 }}>
                        <ul className='highlights'>
                            <li>
                                Managed and mentored a remote team of four Web
                                UI developers
                            </li>
                            <li>
                                Led the Web UI team through sprints to deliver
                                features requested by ESPN in the agreed
                                timeline
                            </li>
                            <li>
                                Implemented features for the new React-based
                                ESPN fantasy baseball web draft client from
                                scratch.
                            </li>
                            <li>
                                Implemented code changes in the product using
                                React, Mobx and Next as base UI technologies
                            </li>
                            <li>
                                Participated in the architecture, pattern, and
                                code styles throughout the main product
                            </li>
                        </ul>
                    </div>
                    <header>
                        <span className='space-left'>
                            <span className='fa fa-caret-right'></span>
                        </span>
                        <div className='position'>Full Stack Engineer</div>
                        <div className='company'>Gosoft S.A</div>
                        <div className='date'>
                            <span className='startDate'>March 2016</span>
                            <span className='endDate'>- May 2017</span>
                        </div>
                    </header>

                    <ul className='keywords'>
                        <li>Javascript</li>
                        <li>Google Analytics</li>
                        <li>AngularJS</li>
                        <li>Ionic</li>
                        <li>SASS</li>
                        <li>
                            C# using Razor Views, .NET Core, and Entity
                            Framework
                        </li>
                        <li>SQL Management Studio</li>
                        <li>Git</li>
                    </ul>

                    <div className='item display none' style={{ opacity: 0 }}>
                        <ul className='highlights'>
                            <li>
                                Performed full-stack development on two projects
                                (CocoBongo.com rebuild and CocoBongo Entrance
                                Checker app) with Javascript, AngularJS, Ionic,
                                C#, and SQL using TDD techniques.
                            </li>
                            <li>
                                Implemented Cocobongo&#x27;s new tracking system
                                for buyer experience optimization with AngularJS
                                and Google Analytics
                            </li>
                            <li>
                                Implemented customer design changes across the
                                entire UI of the project.
                            </li>
                            <li>
                                Defined and implemented new features/A-B
                                testings for the website that improved Google
                                AdWords campaigns investment
                            </li>
                            <li>
                                Using Google Analytics to analyze interaction
                                and web site usage across the project
                            </li>
                            <li>
                                Implemented/maintained full backend code in C#
                                (API coding/integrations and SQL DB schema)
                            </li>
                        </ul>
                    </div>
                    <header>
                        <span className='space-left'>
                            <span className='fa fa-caret-right'></span>
                        </span>
                        <div className='position'>Frontend Engineer</div>
                        <div className='company'>Gosur</div>
                        <div className='date'>
                            <span className='startDate'>October 2014</span>
                            <span className='endDate'>- March 2016</span>
                        </div>
                    </header>

                    <span className='website'>
                        <a href='http://www.gosur.com'>http://www.gosur.com</a>
                    </span>

                    <ul className='keywords'>
                        <li>Javascript</li>
                        <li>Jquery,</li>
                        <li>AngularJS</li>
                        <li>Underscore.js</li>
                        <li>Modernizr.js</li>
                        <li>Bootstrap.js</li>
                        <li>Respond.js</li>
                        <li>SASS</li>
                        <li>Git</li>
                    </ul>

                    <div className='item display none' style={{ opacity: 0 }}>
                        <ul className='highlights'>
                            <li>
                                Implemented new features using Web development
                                languages (HTML5, CSS, and Javascript) for
                                multiple projects across the company, with
                                extensive browser support (Internet Explorer 8
                                and above) for mobile, tablet, and desktop
                                devices.
                            </li>
                            <li>
                                Worked side by side with designers to bring
                                design ideas into reality
                            </li>
                            <li>
                                Improved the SEO and overall web performance
                                across all the company products by implementing
                                changes on the frontend infrastructure in a
                                rapid-development environment
                            </li>
                            <li>
                                Included analytics events to UI components in
                                order to track user behavior
                            </li>
                            <li>
                                Collaborated with the Backend team in features
                                E2E, API&#x27;s definitions and testing
                            </li>
                        </ul>
                    </div>
                    <header>
                        <span className='space-left'>
                            <span className='fa fa-caret-right'></span>
                        </span>
                        <div className='position'>Software Engineer</div>
                        <div className='company'>Intel Corporation</div>
                        <div className='date'>
                            <span className='startDate'>September 2011</span>
                            <span className='endDate'>- September 2014</span>
                        </div>
                    </header>

                    <span className='website'>
                        <a href='http://www.intel.com'>http://www.intel.com</a>
                    </span>

                    <ul className='keywords'>
                        <li>JavaScript</li>
                        <li>AngularJS</li>
                        <li>Node.js</li>
                        <li>Sails.js</li>
                        <li>Ionic</li>
                        <li>HTML &amp; CSS</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Android</li>
                        <li>Git</li>
                    </ul>

                    <div className='item display none' style={{ opacity: 0 }}>
                        <ul className='highlights'>
                            <li>
                                Developed End to end Android + Web App proof the
                                concept for an e-commerce service on the Tizen
                                OS, featuring location based behavior.
                            </li>
                            <li>
                                Implementing code using technologies in both
                                backend (nodejitsu, nodes, sailsjs) and frontend
                                (bootstrap, angularjs, leaflet)
                            </li>
                            <li>
                                Developed some of the android screens as
                                embedded (webkit) HTML angularjs backend served
                                pages
                            </li>
                            <li>
                                Participated in projects related to eCommerce
                                platforms, open-source initiatives (Openstack,
                                and client-side applications)
                            </li>
                            <li>
                                Performed Scrum Master tasks in some of the
                                teams
                            </li>
                        </ul>
                    </div>
                    <header>
                        <span className='space-left'>
                            <span className='fa fa-caret-right'></span>
                        </span>
                        <div className='position'>Junior Software Engineer</div>
                        <div className='company'>Intel Corporation</div>
                        <div className='date'>
                            <span className='startDate'>April 2010</span>
                            <span className='endDate'>- August 2011</span>
                        </div>
                    </header>

                    <ul className='keywords'>
                        <li>JavaScript</li>
                        <li>C++</li>
                        <li>Bitrock (Windows Installers)</li>
                        <li>Windows Registry knowledge</li>
                        <li>.NET Framework</li>
                    </ul>

                    <div className='item display none' style={{ opacity: 0 }}>
                        <ul className='highlights'>
                            <li>
                                Performed development task on a Windows client
                                application (based on C++ and Javascript)
                            </li>
                            <li>
                                Performed changes on Windows installers for
                                different devices and configurations
                            </li>
                            <li>
                                Participated as security development contact,
                                learning and following security procedures that
                                assured the security level of the product.
                            </li>
                            <li>
                                Promoted to Semi-Senior Software Engineer after
                                excelling in both soft (got a &#x27;Discipline
                                Role Mode&#x27; award from the company) and hard
                                skills (software development in C++).
                            </li>
                        </ul>
                    </div>
                </section>
            </section>

            <section className='section'>
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

            <section className='section margin1'>
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
            <section className='section'>Built using jsonresume.org</section>
        </div>
    )
}

export default Resume

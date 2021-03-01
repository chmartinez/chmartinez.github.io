import { useRef, useEffect } from 'react'

import './resume.css'
import datum from '../data.json'
import type { Resume } from './resume/types'
import {
    Education,
    HeaderInfo,
    Languages,
    Skills,
    WorkExperience,
} from './resume/'

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
            <Languages languages={data.languages} />
        </div>
    )
}

export default MyResume

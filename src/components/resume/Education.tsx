import type { Education as EducationType } from './types'

type Props = { educations: Array<EducationType> }

function Education({ educations }: Props) {
    return (
        <section className='section education'>
            <header>
                <h2 className='section-title'>
                    Education{' '}
                    <span className='item-count'>{`(${educations.length})`}</span>
                </h2>
            </header>
            <section id='education'>
                {educations.map((education) => (
                    <div key={education.id}>
                        <header className='clear'>
                            <span className='space-left'>
                                <span className='fa fa-caret-down'></span>
                            </span>
                            <div className='header-left'>
                                <div className='studyType'>
                                    {education.studyType}
                                </div>
                                <div className='institution'>
                                    {education.institution}
                                </div>
                            </div>
                            <div className='date'>
                                <span className='endDate'>{`${education.endDate}`}</span>
                            </div>
                        </header>
                        <span className='location'>
                            <span className='fa fa-map-marker'></span>
                            <span className='city'>{`${education.location.city}, `}</span>
                            <span className='region'>
                                {education.location.region}
                            </span>
                            <span className='countryCode'>{` (${education.location.countryCode})`}</span>
                        </span>
                    </div>
                ))}
            </section>
        </section>
    )
}
export default Education

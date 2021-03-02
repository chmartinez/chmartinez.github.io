import type { Education as EducationType } from './types'
import { ExpandibleListItem } from '../common/'

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
                {educations.map((education, index) => (
                    <ExpandibleListItem
                        key={education.id}
                        expanded={index === 0}
                        content={() => (
                            <>
                                <div>
                                    <div className='studyType'>
                                        {education.studyType}
                                    </div>
                                    <div className='institution'>
                                        {` at ${education.institution}`}
                                    </div>
                                </div>
                                <div
                                    className='date'
                                    style={{
                                        display: 'inline',
                                        float: 'right',
                                    }}
                                >
                                    <span className='endDate'>{`${education.endDate}`}</span>
                                </div>
                            </>
                        )}
                        expandedContent={() => (
                            <span className='location'>
                                <span className='fa fa-map-marker'></span>
                                <span className='city'>{`${education.location.city}, `}</span>
                                <span className='region'>
                                    {education.location.region}
                                </span>
                                <span className='countryCode'>{` (${education.location.countryCode})`}</span>
                            </span>
                        )}
                    />
                ))}
            </section>
        </section>
    )
}
export default Education

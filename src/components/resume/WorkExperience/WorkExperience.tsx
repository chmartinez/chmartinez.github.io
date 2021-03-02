import type { Work } from '../types'
import ExpandibleListItem from '../../common/ExpandibleListItem'

type Props = { experience: Array<Work> }
function WorkExperience({ experience }: Props) {
    return (
        <section className='section work-experience'>
            <header>
                <h2 className='section-title'>
                    Work Experience{' '}
                    <span className='item-count'>({experience.length})</span>
                </h2>
            </header>
            <section id='work'>
                {experience.map((item, index) => (
                    <ExpandibleListItem
                        key={item.id}
                        expanded={index === 0}
                        content={() => (
                            <>
                                <div className='position'>{item.position}</div>{' '}
                                <div className='company'>{`at ${item.company}`}</div>
                                <div className='date'>
                                    <span className='startDate'>
                                        {item.startDate}
                                    </span>
                                    <span className='endDate'>
                                        {` - ${item.endDate ?? 'Current'}`}
                                    </span>
                                </div>
                            </>
                        )}
                        expandedContent={() => (
                            <>
                                {item.website && (
                                    <span className='website'>
                                        <a href={item.website}>
                                            {item.website}
                                        </a>
                                    </span>
                                )}
                                <ul className='keywords'>
                                    {item.keywords.map((prop) => {
                                        const key = prop
                                            .replace(/\s/g, '')
                                            .toLowerCase()
                                        return <li key={key}>{prop}</li>
                                    })}
                                </ul>
                                <ul className='highlights'>
                                    {item.highlights.map((prop) => {
                                        const key = prop
                                            .replace(/\s/g, '')
                                            .toLowerCase()
                                        return <li key={key}>{prop}</li>
                                    })}
                                </ul>
                            </>
                        )}
                    />
                ))}
            </section>
        </section>
    )
}

export default WorkExperience

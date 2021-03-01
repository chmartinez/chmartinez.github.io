import Item from './Item'
import type { Work } from '../types'

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
                    <Item key={item.id} item={item} open={index === 0} />
                ))}
            </section>
        </section>
    )
}

export default WorkExperience

import type { Skill } from './types'
import { ProgressBar, TagList } from '../common/'

type Props = { skills: Array<Skill> }

function Skills({ skills }: Props) {
    return (
        <section className='section skills margin1'>
            <header>
                <h2 className='section-title'>Skills</h2>
            </header>
            <section id='skills'>
                {skills.map((skill) => (
                    <div className='skill item' key={skill.level}>
                        <ProgressBar
                            label={skill.level}
                            progress={skill.level}
                        />
                        <TagList tags={skill.keywords} />
                    </div>
                ))}
            </section>
        </section>
    )
}

export default Skills

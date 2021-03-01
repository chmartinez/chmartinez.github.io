import type { Skill } from './types'
type Props = { skills: Array<Skill> }

function Skills({ skills }: Props) {
    return (
        <section className='section skills margin1'>
            <header>
                <h2 className='section-title'>Skills</h2>
            </header>
            <section id='skills'>
                {skills.map((skill) => (
                    <div className='item' key={skill.level}>
                        <div className={`level ${skill.level.toLowerCase()}`}>
                            <em>{skill.level}</em>
                            <div className='bar'></div>
                        </div>
                        <ul className='keywords'>
                            {skill.keywords.map((keyword) => (
                                <li key={keyword}>{keyword}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default Skills

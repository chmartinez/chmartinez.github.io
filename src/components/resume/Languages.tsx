import type { Language } from './types'

type Props = { languages: Array<Language> }

function Languages({ languages }: Props) {
    return (
        <section className='section languages margin1'>
            <header>
                <h2 className='section-title'>Languages</h2>
            </header>
            <section id='languages'>
                {languages.map((language) => (
                    <div className='display' key={language.language}>
                        <h3 className='language'>{language.language}</h3>
                        <div className='item'>
                            <div
                                className={`level fluency ${language.fluency.toLowerCase()}`}
                            >
                                <em>{language.fluency}</em>
                                <div className='bar'></div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default Languages

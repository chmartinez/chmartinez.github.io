import { useState } from 'react'
import styled from 'styled-components'
import type { Work } from '../types'

const StyledContainer = styled.div`
    margin-bottom: 1.2em;
`
const StyledHeader = styled.div`
    font-size: 1.38em;
    cursor: pointer;

    .space-left {
        color: #aaa;
    }

    /* overriding styles like a boss*/
    .company::before {
        content: none;
    }

    .date {
        display: block;
        font-size: 1rem;
        font-weight: 600;
    }
`
type Props = { item: Work; open: boolean }

function Item({ item, open }: Props) {
    const [isOpen, setOpen] = useState(open || false)
    const handleClick = () => {
        setOpen((state) => !state)
    }
    return (
        <StyledContainer>
            <StyledHeader onClick={handleClick}>
                <span className='space-left'>
                    <span
                        className={`fa ${
                            isOpen ? 'fa-caret-down' : 'fa-caret-right'
                        }`}
                    ></span>
                </span>
                <div className='position'>{item.position}</div>{' '}
                <div className='company'>{`at ${item.company}`}</div>
                <div className='date'>
                    <span className='startDate'>{item.startDate}</span>
                    <span className='endDate'>
                        {` - ${item.endDate ?? 'Current'}`}
                    </span>
                </div>
            </StyledHeader>
            {item.website && (
                <span className='website'>
                    <a href={item.website}>{item.website}</a>
                </span>
            )}

            <ul className='keywords'>
                {item.keywords.map((prop) => {
                    const key = prop.replace(/\s/g, '').toLowerCase()
                    return <li key={key}>{prop}</li>
                })}
            </ul>

            {isOpen && (
                <div className='item display'>
                    <ul className='highlights'>
                        {item.highlights.map((prop) => {
                            const key = prop.replace(/\s/g, '').toLowerCase()
                            return <li key={key}>{prop}</li>
                        })}
                    </ul>
                </div>
            )}
        </StyledContainer>
    )
}

export default Item

import { useState } from 'react'
import styled from 'styled-components'

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
    .company::before,
    .institution::before,
    .organization::before,
    .awarder::before {
        content: none;
    }

    .date {
        display: block;
        font-size: 1rem;
        font-weight: 600;
    }

    div {
        display: inline;
    }
`

type Props = {
    expanded: boolean
    content: () => React.ReactNode
    expandedContent: () => React.ReactNode
}

function ExpandibleListItem({ expanded, content, expandedContent }: Props) {
    const [isExpanded, setExpanded] = useState(expanded)
    const handleClick = () => setExpanded((state) => !state)

    return (
        <StyledContainer>
            <StyledHeader onClick={handleClick}>
                <div className='space-left'>
                    <span
                        className={`fa ${
                            isExpanded ? 'fa-caret-down' : 'fa-caret-right'
                        }`}
                    ></span>
                </div>
                <div>{content()}</div>
            </StyledHeader>

            {isExpanded && (
                <div className='expanded-item'>{expandedContent()}</div>
            )}
        </StyledContainer>
    )
}

export default ExpandibleListItem

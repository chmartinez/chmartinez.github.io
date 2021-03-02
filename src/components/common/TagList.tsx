type Props = {
    tags: Array<string>
}

function TagList({ tags }: Props) {
    return (
        <ul className='keywords'>
            {tags.map((tag) => {
                const key = tag.replace(/\s/g, '').toLowerCase()
                return <li key={key}>{tag}</li>
            })}
        </ul>
    )
}
export default TagList

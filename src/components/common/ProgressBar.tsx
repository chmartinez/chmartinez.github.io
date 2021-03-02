type Props = {
    label: string
    progress: string
}

function ProgressBar({ label, progress }: Props) {
    return (
        <div className={`level ${progress.toLowerCase()}`}>
            <em>{label}</em>
            <div className='bar'></div>
        </div>
    )
}
export default ProgressBar

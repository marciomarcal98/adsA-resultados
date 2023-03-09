export function Rectangle({ icon, text, number, color }) {
    return (
        <div className={color}>
            <img src={icon} alt={text} />
            <span>{text}</span>
            <strong>
                <span>{number}</span> / 100
            </strong>
        </div>
    )
}
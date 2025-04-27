export default function Feedback({options, totalFeedback, positive}){
    return (<div>
        <p>Good: {options.good}</p>
        <p>Bad: {options.bad}</p>
        <p>Neutral: {options.neutral}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positive}%</p>
    </div>)
}
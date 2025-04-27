import css from './Options.module.css'

export default function Options({updateFeedback, resetFeedback, totalFeedback}){
    const isFeedback = totalFeedback > 0;
    return (<div className={css.btnContainer}> 
        <button className={css.btnItem} onClick={() => updateFeedback("good")}>Good</button>
        <button className={css.btnItem} onClick={() => updateFeedback("bad")}>Bad</button>
        <button className={css.btnItem} onClick={() => updateFeedback("neutral")}>Neutral</button>
        {isFeedback && <button className={css.btnItem} onClick={resetFeedback}>Reset</button>}
    </div>)
}
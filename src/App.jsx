import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description'
import Options from './components/Options'
import Feedback from './components/Feedback'
import Notification from './components/Notification'

function App() {
  const [option, setOption] = useState(() => {
    const savedOptions = window.localStorage.getItem("saved-option");

    return savedOptions ? JSON.parse(savedOptions) : { good: 0, neutral: 0, bad: 0 };
  });

    const updateFeedback = feedbackType => {
      setOption(prevOption => ({
        ...prevOption,
        [feedbackType]: prevOption[feedbackType] + 1, 
      }));
    };

    const resetFeedback = () => {
      setOption({ good: 0, neutral: 0, bad: 0 });
    };

    let totalFeedback = option.good + option.bad + option.neutral;

    const isFeedback = totalFeedback > 0;

    const positive = Math.round((option.good / totalFeedback) * 100);
    
    useEffect(() => {
      window.localStorage.setItem("saved-option", JSON.stringify(option));
    }, [option]);
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback}
      resetFeedback={resetFeedback}
      totalFeedback={totalFeedback}/>
      {isFeedback ? <Feedback options={option}
      totalFeedback={totalFeedback}
      positive={positive} /> : <Notification />}
    </>
  )
}

export default App
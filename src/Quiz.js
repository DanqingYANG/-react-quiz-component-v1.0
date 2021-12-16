import React, { useState } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

const Quiz = (props) => {
    const [position, setPosition] = useState(0);
    const [isQuizEnd, setIsQuizEnd] = useState(false)

    const showNextQuestion = () =>
    {
        setPosition(position + 1)
        setIsQuizEnd(position + 1 === quizData.quiz_questions.length)
        console.log(position + "isEnd: " + isQuizEnd)
    }

    const handleResetClick = () =>
    {
        setPosition(0)
    }
    
    return(
        <div className="container">
            {/* {position}{quizData.quiz_questions[0].answer} */}
            {isQuizEnd ? 
            <QuizEnd resetClickHandler = {handleResetClick}/> :
            <QuizQuestion question = {quizData.quiz_questions[position]} 
            showNextQuestionHandler={showNextQuestion}/>}
        </div>
    )
}

export default Quiz


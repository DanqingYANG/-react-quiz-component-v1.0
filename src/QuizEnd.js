import React from 'react'

const QuizEnd = (props) => {
    return(
        <div>
            <p>Thanks for playing!</p>
            <a href='a_value' onClick={props.resetClickHandler}>Reset Quiz</a>
        </div>
    )
}

export default QuizEnd 
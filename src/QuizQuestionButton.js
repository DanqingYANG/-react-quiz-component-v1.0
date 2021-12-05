import React from 'react'

const QuizQuestionButton = (props) => {
    return(
    <li>   
        <button onClick = {() => props.clickHandler(props.button_text)}>
            {props.button_text}
        </button> 
    </li>
    )
}

export default QuizQuestionButton
import React from 'react'
// import './QuizQuestionButton.css'

const QuizQuestionButton = (props) => {
    return(
    <div>   
        <button className ="btn btn-primary btn-block mt-2" 
        onClick = {() => props.clickHandler(props.button_text)}>
            {props.button_text}
        </button> 
    </div>
    )
}

export default QuizQuestionButton



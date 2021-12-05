import React, { useState } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

const QuizQuestion = (props) => {
    const [incorrectAnswer, setIncorrectAnswer] = useState(false)

    const handleClick = (value) => {
        console.log(value)
        if(value === props.question.answer) {
            setIncorrectAnswer(false)
            props.showNextQuestionHandler()
        }
        else{
            setIncorrectAnswer(true)
        }
    }

    return (
        <div>
            <main>
                <section>
                    <p>
                        {props.question.instruction_text} 
                    </p>
                </section>
                <section>
                    <ul>
                        {
                            props.question.answer_options.map((value, i) => {
                            return <QuizQuestionButton key={i} button_text = {value} clickHandler = {() => {handleClick(value)}}/>;
                         })
                        }
                    </ul>
                </section>
                <li>
                    {incorrectAnswer? <p className='error'>Sorry, that's not right.</p> : ""}
                </li>
            </main>
        </div>
    )
}

export default QuizQuestion
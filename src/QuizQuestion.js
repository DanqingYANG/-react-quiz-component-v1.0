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
        <div className="card p-2 m-2">
            <main>
                <section>
                    <p className="card p-3 col-12">
                        {props.question.instruction_text} 
                    </p>
                </section>
                <section>
                    <ul>
                        {
                            props.question.answer_options.map((value, i) => {
                            return <QuizQuestionButton key={i} button_text = {value} 
                            clickHandler = {() => {handleClick(value)}}/>;
                         })
                        }
                    </ul>
                </section>
                <div>
                    {incorrectAnswer? <p className='error'>Sorry, that's not right.</p> : ""}
                </div>
            </main>
        </div>
    )
}

export default QuizQuestion



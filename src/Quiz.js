import React, { useState } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:'yellowgreen',
  },

})

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
        // <div className="container">
        <View style={styles.container}>
            {/* {position}{quizData.quiz_questions[0].answer} */}
            {isQuizEnd ? 
            <QuizEnd resetClickHandler = {handleResetClick}/> :
            <QuizQuestion question = {quizData.quiz_questions[position]} 
            showNextQuestionHandler={showNextQuestion}/>}
        </View>
        // </div>
    )
}

export default Quiz


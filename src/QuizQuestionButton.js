import React from 'react'
// import './QuizQuestionButton.css'
import { StyleSheet, View} from 'react-native';


const styles = StyleSheet.create({
  
    buttonStyle: {
        flex:1,
        width: 100,
  },

})

const QuizQuestionButton = (props) => {
    return(
    <div>   
        <View style={styles.buttonStyle}>
            <button 
            onClick = {() => props.clickHandler(props.button_text)}>
                {props.button_text}
            </button> 
        </View>
    </div>
    )
}

export default QuizQuestionButton


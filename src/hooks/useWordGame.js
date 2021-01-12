import {useState, useEffect, useRef} from "react";

function useWordGame(startingTime = 10){
    const [text, setText] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(startingTime);
    const [wordCount, setWordCount] = useState(0);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const textAreaRef = useRef(null);

    function handleChange(event){
        const {value} = event.target;
        setText(value);
      }
    
      function calculateWordCount(text){
        const wordsArr = text.trim().split(" ");
        return wordsArr.filter(word => word !== "").length;
      }
    
      function startGame(){
        setIsTimeRunning(true);
        setTimeRemaining(startingTime);
        setText("");
        setWordCount(0);
        textAreaRef.current.disabled = false;
        textAreaRef.current.focus();
      }
    
      function endGame(){
        setIsTimeRunning(false);
        setWordCount(calculateWordCount(text));
      }

      useEffect(() => {
        if(isTimeRunning && timeRemaining > 0){
          setTimeout(() => {
            setTimeRemaining(time => time - 1);
          }, 1000)
        }else if(timeRemaining === 0){
          endGame();
        }
      }, [timeRemaining, isTimeRunning])

      return {text, handleChange, isTimeRunning, textAreaRef, timeRemaining, startGame, wordCount};
}

export default useWordGame;
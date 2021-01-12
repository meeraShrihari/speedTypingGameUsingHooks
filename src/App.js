import React from 'react'
import useWordGame from "./hooks/useWordGame";

function App() {
  const {
    text, 
    handleChange, 
    isTimeRunning, 
    textAreaRef, 
    timeRemaining, 
    startGame, 
    wordCount
  } = useWordGame(5);

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea 
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
        ref={textAreaRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;

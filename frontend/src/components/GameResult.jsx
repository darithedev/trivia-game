import { useState } from 'react'

const GameResult = ({ userChoices, questionsObj, onReset }) => {
    const [endResult, setEndResult] = useState({});

    return (
        <div className="game-result">
            <h2>Trivia Quiz Result</h2>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default GameResult;
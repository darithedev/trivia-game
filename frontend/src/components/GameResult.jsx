import { useState, useEffect } from 'react'

const GameResult = ({ userChoices, questionsObj, onReset }) => {
    const [endResult, setEndResult] = useState({});
    
    const fetchResult = () => {
        const url = 'http://localhost:8080/api/result';

        fetch(url, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify({ 
                user_answer: userChoices,
                questions: questionsObj.results
            })
        })
        .then((response) => response.json())
        .then((result) => setEndResult(result));
    }

    useEffect(() => {
        fetchResult();
    }, []);

    return (
        <div className="game-result">
            <h2>Trivia Quiz Result</h2>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default GameResult;
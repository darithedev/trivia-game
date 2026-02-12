import { useState, useEffect } from 'react'
import decode from '../helpers/decodeHtml.js'

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
            <p>Your Score: {endResult.score}</p>
            <p>{endResult.won 
                ? `You did it!! You scored over 70! You ${endResult.result}!` 
                : `Aw shucks, you scored less than 70. You ${endResult.result}. Wanna Try Again?`}
            </p>

            <h3>Review:</h3>
            {questionsObj.results.map((question, index) => (
                <div key={index}>
                    <p>{index + 1}: {decode(question.question)}
                    </p>
                    {[question.correct_answer, ...question.incorrect_answers].sort().map((choice, i) => (
                        <button
                            key={i}
                            style={
                                decode(choice) === decode(question.correct_answer)
                                    ? { backgroundColor: "green" }
                                    : userChoices[index] === decode(choice)
                                        ? { backgroundColor: "red" } 
                                        : {}
                            }
                        >
                            {decode(choice)}
                        </button>
                    ))}
                </div>
            ))}

            <p>To reset the game, click reset button below</p>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default GameResult;
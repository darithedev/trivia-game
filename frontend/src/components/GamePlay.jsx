import { useState } from 'react'
import decode from '../helpers/decodeHtml.js'

const GamePlay = ({ preferences, questionsObj, onSubmit, onExit }) => {
    const [userChoices, setUserChoices] = useState({});

    if (!questionsObj?.results) {
        return <p>Loading Trivia Questions</p>
    }
    
    const handleSelection = (index, selection) => {
        setUserChoices(prev => ({
            ...prev,
            [index]: selection
        }))
    }

    return (
        <div className="game-play">
            <h2>Trivia Quiz: {preferences.categoryName === "" ? "Mixed Category" : preferences.categoryName}</h2>
            <div>
                {questionsObj.results.map((question, index) => (
                    <div key={index}>
                        <p>{index + 1}: {decode(question.question)}
                        </p>
                        {[question.correct_answer, ...question.incorrect_answers].sort().map((choice, i) => (
                            <button
                                key={i}
                                onClick={() => handleSelection(index, decode(choice))}
                                style={userChoices[index] === decode(choice)
                                    ? { backgroundColor: "gray"} 
                                    : {}
                                }
                            >
                                {decode(choice)}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <button
                disabled={Object.entries(userChoices).length !== questionsObj.results.length}
                onClick={() => onSubmit(userChoices)}
            >
                Submit
            </button>
            <button onClick={onExit}>Exit</button>
        </div>
    )
}

export default GamePlay;
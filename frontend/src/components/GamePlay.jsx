import { useState } from 'react'
import decode from '../helpers/decodeHtml.js'
import './GamePlay.css'

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
            {questionsObj.results.length === 0
                ? (
                    <>  
                        <h2>Oops, there aren't enough questions in this category</h2>
                        <p>Please reduce the number of questions or change the difficulty and then try again!</p>
                        <p>If you're still having issues, set the difficulty to "Any Difficulty"</p>
                        <button className="bottom" onClick={onExit}>Go Back</button>
                    </>
                ) : (
                    <>
                        <h2>Trivia Quiz: {preferences.categoryName === "" ? "Mixed Category" : preferences.categoryName}</h2>
                        <div>
                            {questionsObj.results.map((question, index) => (
                                <div key={index}>
                                    <p className="question">{index + 1}: {decode(question.question)}
                                    </p>
                                    {[question.correct_answer, ...question.incorrect_answers].sort().map((choice, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSelection(index, decode(choice))}
                                            style={userChoices[index] === decode(choice)
                                                ? { backgroundColor: "gray" } 
                                                : {}
                                            }
                                        >
                                            {decode(choice)}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <button className="bottom"
                            disabled={Object.entries(userChoices).length !== questionsObj.results.length}
                            onClick={() => onSubmit(userChoices)}
                        >
                            Submit
                        </button>
                        <button className="bottom" onClick={onExit}>Exit</button>
                    </>
                )
            }
        </div>
    )
}

export default GamePlay;
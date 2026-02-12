import { useState } from 'react'

const GamePlay = ({ preferences, questionsObj, onSubmit, onExit }) => {
    const [userChoices, setUserChoices] = useState({});
    const parser = new DOMParser();

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
                        <p>{index + 1}: {parser
                            .parseFromString(`<!doctype html><body>${question.question}`, 'text/html')
                            .body.textContent}
                        </p>
                        {[question.correct_answer, ...question.incorrect_answers].sort().map((choice, i) => (
                            <button
                                key={i}
                                onClick={() => handleSelection(index, parser
                                    .parseFromString(`<!doctype html><body>${choice}`, 'text/html')
                                    .body.textContent
                                )}
                                style={userChoices[index] === parser
                                    .parseFromString(`<!doctype html><body>${choice}`, 'text/html')
                                    .body.textContent 
                                    ? { backgroundColor: "gray"} : {}
                                }
                            >
                                {parser
                                    .parseFromString(`<!doctype html><body>${choice}`, 'text/html')
                                    .body.textContent}
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
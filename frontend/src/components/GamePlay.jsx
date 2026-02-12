import { useState } from 'react'

const GamePlay = ({ questionsObj, onSubmit }) => {
    const [userChoices, setUserChoices] = useState({});
    const parser = new DOMParser();

    if (!questionsObj?.results) {
        return <p>Loading Trivia Questions</p>
    }
    
    const handleSelection = () => {

    }

    return (
        <div className="game-play">
            <p>Hello from GamePlay</p>
            <div>
                {questionsObj.results.map((question, index) => (
                    <div key={index}>
                        <p>{index + 1}: {parser
                            .parseFromString(`<!doctype html><body>${question.question}`, 'text/html')
                            .body.textContent}
                        </p>
                        {[question.correct_answer, ...question.incorrect_answers].sort().map((choice, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelection(index, parser
                                    .parseFromString(`<!doctype html><body>${choice}`, 'text/html')
                                    .body.textContent
                                )}
                            >
                                {parser
                                    .parseFromString(`<!doctype html><body>${choice}`, 'text/html')
                                    .body.textContent}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <button onClick={() => onSubmit(userChoices)}>Submit</button>
        </div>
    )
}

export default GamePlay;
import { useState } from 'react'

const GameSetup = ({ preferences, setPreferences, onPlay }) => {
    const [fetchedCategories, setFetchedCategories] = useState([]);
    const amount = [5, 10, 20, 30, 40, 50]; // Number of questions
    const difficulty = ["easy", "medium", "hard"]
    const type = { multiple: "Multiple Choice", boolean: "True or False" }

    return (
        <div className="game-setup">
            <p>Hello from GameSetup</p>
            <form onSubmit={onPlay}>

                <button type="submit">Play Trivia</button>
            </form>
        </div>
    )
}

export default GameSetup
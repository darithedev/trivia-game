import { useState, useEffect } from 'react'

const GameSetup = ({ preferences, setPreferences, onPlay }) => {
    const [fetchedCategories, setFetchedCategories] = useState([]);
    const amount = [5, 10, 20, 30, 40, 50]; // Number of questions
    const difficulty = ["easy", "medium", "hard"];
    const type = { multiple: "Multiple Choice", boolean: "True or False" };

    const fetchCategory = () => {
        const url = `http://localhost:8080/api/category`;

        fetch(url)
            .then((response) => response.json())
            .then((result) => setFetchedCategories(result))
    };

    useEffect(() => {
        fetchCategory()
    }, []);

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
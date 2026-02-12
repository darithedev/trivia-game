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
                <label>
                    How Many Questions:
                    <select
                        value={preferences.amount}
                        onChange={((event) => 
                            setPreferences(prev => ({
                                ...prev,
                                amount: Number(event.target.value)
                            }))
                        )}
                    >
                        {amount.map((number) => (
                            <option key={number} value={number}>{number}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Select a Category:
                    <select
                        value={preferences.category}
                        onChange={((event) => 
                            setPreferences(prev => ({
                                ...prev,
                                category: event.target.value
                            }))
                        )}
                    >
                        <option value="">Any Category</option>
                        {fetchedCategories.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Select Difficulty:
                    <select
                        value={preferences.difficulty}
                        onChange={((event) => 
                            setPreferences((prev) => ({
                                ...prev,
                                difficulty: event.target.value
                            }))
                        )}
                    >
                        <option value="">Any Difficulty</option>
                        {difficulty.map(d => (
                            <option key={d} value={d}>{d}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Select Question Type:
                    <select
                        value={preferences.type}
                        onChange={((event) => 
                            setPreferences(prev => ({
                                ...prev,
                                type: event.target.value
                            }))
                        )}
                    >
                        <option value="">Any Type</option>
                        {Object.entries(type).map(([key, value]) => (
                            <option key={key} value={key}>{value}</option>
                        ))}
                    </select>
                </label>
                <button type="submit">Play Trivia</button>
            </form>
        </div>
    )
}

export default GameSetup
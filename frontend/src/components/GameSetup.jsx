const GameSetup = ({ preferences, setPreferences, onPlay }) => {
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
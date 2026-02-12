const GameSetup = ({ onPlay }) => {
    return (
        <div className="game-setup">
            <p>Hello from GameSetup</p>
            <button onClick={onPlay}>Play</button>
        </div>
    )
}

export default GameSetup
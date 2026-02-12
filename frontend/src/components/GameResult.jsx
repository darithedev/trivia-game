const GameResult = ({ onReset }) => {
    return (
        <div className="game-result">
            <p>Hello from GameResult</p>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default GameResult;
import { useState } from 'react'

const GamePlay = ({ questionsObj, onSubmit }) => {
    return (
        <div className="game-play">
            <p>Hello from GamePlay</p>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default GamePlay;
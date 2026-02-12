import { useState } from 'react'
import './App.css'
import GameSetup from './components/GameSetup.jsx'
import GamePlay from './components/GamePlay.jsx'
import GameResult from './components/GameResult.jsx'

function App() {
  const [screen, setScreen] = useState("setup"); // 3 screens: setup, play, result
  const [preferences, setPreferences] = useState({ 
    amount: null, 
    category: "", 
    difficulty: "", 
    type: "",
  });

  return (
    <>
      {screen === "setup" && (
        <GameSetup 
          onPlay={() => setScreen("play")}
        />
      )}

      {screen === "play" && (
        <GamePlay 
          onSubmit={() => setScreen("result")}
        />
      )}

      {screen === "result" && (
        <GameResult
          onReset={() => setScreen("setup")}
        />
      )}
    </>
  )
}

export default App

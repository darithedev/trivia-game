import { useState } from 'react'
import './App.css'
import GameSetup from './components/GameSetup.jsx'
import GamePlay from './components/GamePlay.jsx'

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
        <GameSetup />
      )}

      {screen === "play" && (
        <GamePlay />
      )}
    </>
  )
}

export default App

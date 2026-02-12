import { useState } from 'react'
import './App.css'
import GameSetup from './components/GameSetup.jsx'
import GamePlay from './components/GamePlay.jsx'
import GameResult from './components/GameResult.jsx'

function App() {
  const [screen, setScreen] = useState("setup"); // 3 screens: setup, play, result
  const [questionsObj, setQuestionsObj] = useState({});
  const [preferences, setPreferences] = useState({ 
    amount: 0, 
    category: "", 
    difficulty: "", 
    type: "",
  });

  return (
    <>
      {screen === "setup" && (
        <GameSetup
          preferences={preferences}
          setPreferences={setPreferences}
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

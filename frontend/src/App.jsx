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

  const fetchTriviaQuiz = () => {
    const params = new URLSearchParams();

    if (preferences.category) params.append('category', preferences.category);
    if (preferences.difficulty) params.append('difficulty', preferences.difficulty);
    if (preferences.type) params.append('type', preferences.type);

    const url = `http://localhost:8080/${preferences.amount}?${params}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => setQuestionsObj(result))
  }

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

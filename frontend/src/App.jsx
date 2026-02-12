import { useState } from 'react'
import './App.css'

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
      
    </>
  )
}

export default App

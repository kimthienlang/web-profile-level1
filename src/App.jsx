import { useState } from 'react'
import Background from './Components/Background'
import Board from './Components/Board'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Background />
      <Board />
    </>
  )
}

export default App

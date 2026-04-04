import { useState } from 'react'
import './App.css'

function App() {
  const [numA, setNumA] = useState<number>(0)
  const [numB, setNumB] = useState<number>(0)
  const [result, setResult] = useState<number | null>(null)

  const multiply = () => setResult(numA * numB)
  const subtract = () => setResult(numA - numB)

  return (
    <>
      <input type="number" value={numA} onChange={e => setNumA(Number(e.target.value))} />
      <input type="number" value={numB} onChange={e => setNumB(Number(e.target.value))} />
      <button onClick={multiply}>Multiply</button>
      <button onClick={subtract}>Subtract</button>
      {result !== null && <p>Result: {result}</p>}
    </>
  )
}

export default App

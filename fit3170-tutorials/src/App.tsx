import { useState } from 'react';

function App() {
  const [numA, setNumA] = useState<number>(0)
  const [numB, setNumB] = useState<number>(0)
  const [result, setResult] = useState<number | null>(null)

  const multiply = () => setResult(numA * numB)
  const subtract = () => setResult(numA - numB)

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col gap-4 items-center">
        <h1 className="text-3xl font-bold text-gray-800">Calculator</h1>

        <input
          type="number"
          value={numA}
          onChange={e => setNumA(Number(e.target.value))}
          className="border rounded-lg p-3 text-center text-xl w-40"
        />
        <input
          type="number"
          value={numB}
          onChange={e => setNumB(Number(e.target.value))}
          className="border rounded-lg p-3 text-center text-xl w-40"
        />

        <div className="flex gap-4">
          <button onClick={multiply} className="btn bg-blue-500 text-white px-6 py-3 rounded-full font-bold">
            Multiply ×
          </button>
          <button onClick={subtract} className="btn bg-pink-500 text-white px-6 py-3 rounded-full font-bold">
            Subtract −
          </button>
        </div>

        {result !== null && (
          <p className="text-2xl font-semibold text-gray-700">Result: {result}</p>
        )}
      </div>
    </div>
  )
}

export default App;
import { useState } from 'react'

import './App.css'

import Inicio from './Components/Inicio/Inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Inicio />
      </div>
    </>
  )
}

export default App

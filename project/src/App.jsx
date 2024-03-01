import { useState,useCallback } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")


  const passwordGenerator = useCallback(fn, [length,numberAllowed,charAllowed,setPassword])
  return (
    <>
      <h1 className='text-4xl text-center 
      text-white'>Password generator</h1>
    </>
  )
}

export default App

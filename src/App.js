import React, { Component, useState } from 'react'
import Buttons from './components/Buttons'
import Counter from './components/Counter'

function App() {
  const [count,setCount]=useState(0)
    return (
      <div>
      <Counter count={count}/>
      <Buttons count={count} setCount={setCount}/>
      </div>
    )
  }
export default App
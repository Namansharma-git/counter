import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] = useState(0)
  
  //let counter = 15

  const addValue = () => {
    console.log("Clicked", Math.random());
    counter = counter + 1
      setCounter (counter)
  }

  // const addValue = () => {
  //   console.log("Clicked", Math.random());
  //   // counter = counter + 1
  //     setCounter(prevCounter => prevCounter + 1)
  //     setCounter(prevCounter => prevCounter + 1)
  //     setCounter(prevCounter => prevCounter + 1)
  //     setCounter(prevCounter => prevCounter + 1)  /// interview question video 8
  
  const removeValue = () => {
    console.log("Clicked", Math.random());
    if(counter>0 ){
      counter = counter - 1
      setCounter(counter)
    }
  }


  return (
    <>
     <h1>Chai Aur React</h1> 
     <h2>Counter Value : {counter}</h2> 
      
    <button onClick={addValue}>Add Value</button> 
    <br /> 
    <button onClick={removeValue}>Remove Value</button> 
    </>
  )
}

export default App

import Header from "./components/Header.jsx"
import UserInput from './components/UserInput.jsx'
import Output from "./components/Output.jsx"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})
function handleUserInput(inputIdentifier, newValue){
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue
      }
  })
}

const inputIsValid = userInput.duration > 1

  return (
    <>
      <Header/>
      <UserInput handleUserInput={handleUserInput} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <Output input={userInput}/>}
    </>
  )
}

export default App

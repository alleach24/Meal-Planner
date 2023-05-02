import { useState } from 'react'
import './App.css'
import InputCard from './Inputs/InputCard'
import OutputCard from './Outputs/OutputCard'

function App() {
  const [days, setDays] = useState([])

  
  const handleDaySubmit = () => {
    let selectedDays = []
        let listOfDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        listOfDays.forEach((day) => {
            if (document.getElementById(day).checked) {
                selectedDays.push(day)
            }
        })
        console.log(selectedDays)
        setDays(selectedDays)
  }


  return (
    <div>
      <h1>Meal Planner Tool</h1>
      {/* { days.length > 0 && <p>You selected {days.map(day => (<p>{day}</p>))}</p>} */}

      <InputCard submit={handleDaySubmit}/>
      {days.length > 0 && <OutputCard selectedDays={days}/>}
    </div>
  )
}

export default App

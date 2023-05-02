import React from 'react'

export default function OutputCard(props) {
  return (
    <div>
        <h2>Output</h2>
        {props.selectedDays.map(day => <p>{day}</p>)}
    </div>
  )
}

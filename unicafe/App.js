import React, { useState } from 'react'
import './index.css'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const StatisticLine = (props) => {
  return (


    <table>
      <tbody>
        <tr>
<td>
        {props.text}
    </td>
    <td>{props.value}</td>
    </tr>
    </tbody>
    </table>
   
  )
  }

const Statistics = (props) => {
 
  var all = props.good + props.neutral + props.bad
  var average = (props.good - props.bad) / all
  var positive = all / props.good
  
  if (props.allClicks.length === 0) {
    return (
      <div>
        <p>
         No feedback given
         </p>
               </div>
    )
    } else
  return (
   
   <div>
   <h1>Statistics</h1>
<p></p>


<StatisticLine text="good" value ={props.good} />
<StatisticLine text="neutral" value ={props.neutral} />
<StatisticLine text="bad" value ={props.bad} />
<StatisticLine text="all" value = {all}/>
<StatisticLine text="average" value = {average}/>
<StatisticLine text="positive" value = {positive}/>


 </div>
  
  )
}
const App = (props) => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const lisaaHyva = () => {
    setGood(good + 1)
    setAll(allClicks.concat(' '))
  }

  const lisaaHuono = () => { 
    setBad(bad + 1)
    setAll(allClicks.concat(' '))
  }

  const lisaaNeutraali = () => {
    setNeutral(neutral + 1)
  setAll(allClicks.concat(' '))
  }

  return (
    <div>
<h1>Give feedback</h1>
<p></p>

    <Button
      handleClick={lisaaHyva}
      text="good"
/>
<Button
handleClick={lisaaNeutraali}
text="neutral"
/>
<Button
handleClick={lisaaHuono}
text="bad"
/>

<Statistics good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}
        />
    </div>
  )
}

export default App
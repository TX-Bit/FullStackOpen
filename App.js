import React from 'react'

const Header = (props) => {
  
  return (
   <div>
    <h1>{props.course} </h1>
   </div>
  )
}
const Content = (props) => {
  var names = props.parts.map(function(juu) {
    return juu.name;
    
  }
  )
  var exer = props.parts.map(function(joojoo) {
    return joojoo.exercises;
  })

  return (
    <div>
      <li>{names[0]}, {exer[0]}</li>
      <li>{names[1]}, {exer[1]}</li>
      <li>{names[2]}, {exer[2]}</li>

      </div>

  
  )
}
const Total = (props) => {
  var exer = props.parts.map(function(joojoo) {
    return joojoo.exercises;
  })
  var kokonais = exer[0] + exer[1] + exer[2]
  return (
    <div>
      <li>Number of exercises: {kokonais}</li>
    </div>
  )
}

const App = () => {

const course = { 
name: "Half Stack application development",
parts : [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

}
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
  
     
    </div>
  )
}
export default App
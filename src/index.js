import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(-1)
  const [option, setNewOption] = useState('')
  const [options, setOptions] = useState(props.options)
  const newOption = () => { 
    if (props.options && props.options.length > 0) {
    	const selected2 = getRandom(props.options.length)
    	setSelected(selected2)
    } else {
        setSelected(-1)
    }
  }
  
  const handleOptionChange = (event) => {
      setNewOption(event.target.value)
  }
  
  const addNewOption = () => {
      setOptions([...props.options])
      newOption()
      console.log(options)
  }
  
  const addOption = (event) => {
      event.preventDefault()
      props.options.push(option)
      addNewOption()
      setNewOption('')
      console.log(props.options)
  }

  return (
    <div>
      <h1>Add an option for picking</h1>
      <form onSubmit = {addOption}>
          <input value = {option} onChange = {handleOptionChange} />
          <button type='submit'>Add option</button>
      </form>
      <h1>Random option picker</h1>
      { selected === -1 ?
      <p>No options added yet!</p>
      :
      <>
        <h3>Result:</h3>
        <p>{props.options[selected]}</p>
      </>
      }
      <Button handleClick = {newOption} text = 'Pick a random option' />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const getRandom = (under) => {
  return (
      Math.floor(Math.random() * Math.floor(under))
    )
}



const options = [
  
]

ReactDOM.render(
  <App options={options} />,
  document.getElementById('root')
)

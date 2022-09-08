import React, { useReducer, useState, useContext } from 'react'
import './App.css'
import { Bgcontext } from './Components/Context'
import Create from './Components/Create'
import User from './Components/User'
import { Switch, Stack } from '@chakra-ui/react'

export const ACTIONS = {
  POSTTODO: 'post-todo',
  EDITTODO: 'edit-todo',
  DELTODO: 'delete-todo'
}


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.POSTTODO:
      return [...state, action.payload]
    case ACTIONS.EDITTODO:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, isDone: !item.isDone }
        }
        return item
      })
    case ACTIONS.DELTODO:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}


const App = () => {
  const [task, setTask] = useState('Alex')
  const [state, dispatch] = useReducer(reducer, [])
  let { color, setColor } = useContext(Bgcontext)


  const formSubmit = (e) => {
    e.preventDefault()

    let obj = {
      id: Date.now(),
      isDone: false,
      task
    }

    dispatch({ type: ACTIONS.POSTTODO, payload: obj })
  }

  const handleChange = (event) => {
    setColor(event.target.checked);
  };

  return (
    <div className='App' style={{ backgroundColor: color === true ? 'red' : 'black' }}>
      {
        state.length < 1 ? (
          <h1 style={{ marginTop: '100px', fontSize: '30px', color: 'white' }}>Please create New todo</h1>
        ) : (
          <h1 style={{ marginTop: '100px', fontSize: '30px', color: 'white' }}>To Do List</h1>
        )
      }

      <Stack align='center' marginTop='30px'>
        <Switch 
        size='lg'
        isChecked={color}
        checked={color}
        onChange={handleChange}
        />
      </Stack>

      <Create handleSubmit={formSubmit} setTask={setTask} />
      {
        state.map((item) => <User key={item.id} item={item} todo={dispatch} arr={state} />)
      }
    </div>
  )
}

export default App
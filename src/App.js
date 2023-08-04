import React from 'react'
import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

function App() {
  const [todos, setTodos] = useState(['Ilhame', 'Bahri'])
  const [text, setText] = useState('')

  const AddTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, text])
    setText('')
  }
  const UpdateTodo = (i) => {
    const modifyText = prompt('Enter the new Todo :', todos[i])
    todos[i] = modifyText
    setTodos([...todos])
  }
  const DeleteTodo = (i) => {
    todos.splice(i, 1)
    console.log(todos)
    setTodos([...todos])
  }
  const DeleteAllTodo = () => {
    if (DeleteAllTodo) {
      alert('Are you sure you want to delete all the Todos ?')
      setTodos([])
    } else {
      alert('Delete all Todos is canceled')
    }
  }
  return (
    <div>
      <h1 className="Todo__header">TODO APP</h1>
      <form>
        <Paper elevation={5} className="Add__todo">
          <TextField
            className="Text__field"
            label="Enter Todos"
            variant="outlined"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={AddTodo}
            disabled={!text}
          >
            ADD
          </Button>
          <Button variant="contained" color="primary" onClick={DeleteAllTodo}>
            DELETE ALL
          </Button>
        </Paper>
      </form>
      {todos.map((data, i) => {
        return (
          <Paper elevation={4} className="Todos__rendering">
            <p>
              {i + 1} .&nbsp; {data}
            </p>
            <div>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  UpdateTodo(i)
                }}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  DeleteTodo(i)
                }}
              >
                Delete
              </Button>
            </div>
          </Paper>
        )
      })}
    </div>
  )
}

export default App

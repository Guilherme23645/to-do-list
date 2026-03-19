import { useState } from "react"
import Entry from "./Entry"
import List from "./List"

const App = () => {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])

  const onTextChange = (value) => {
    setText(value)
  }

  const onAdd = () => {
    if (!text.trim()) return
    setTodos([...todos, {
      id: Date.now(),
      todo: text,
    }])
    setText("")
  }

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="bg-black h-screen">
      <Entry text={text} onTextChange={onTextChange} onAdd={onAdd} />
      <List todos={todos} onDelete={onDelete}/>    
    </div>
  )
}

export default App
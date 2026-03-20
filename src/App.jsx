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
    <div className="bg-black h-screen flex flex-col items-center">
      <div className="flex flex-col mt-4 border border-teal-300 p-2 rounded-lg">
        <h1 className="text-teal-300 font-bold text-3xl pt-3 pb-4 self-center">To-Do List</h1>
        <Entry text={text} onTextChange={onTextChange} onAdd={onAdd} />
        <List todos={todos} onDelete={onDelete}/>    
      </div>
    </div>
  )
}

export default App
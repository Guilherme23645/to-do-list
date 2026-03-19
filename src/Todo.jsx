const Todo = ({id, todo, onDelete}) => {
  return (
    <div>
        {todo}{" "}
        <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default Todo
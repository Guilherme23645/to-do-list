import Todo from "./Todo"

const List = ({todos, onDelete}) => {
  const rows = todos.map((todo) => (
    <li key={todo.id}>
      <Todo id={todo.id} todo={todo.todo} onDelete={onDelete} />
    </li>
  ))

  return (
    <div>
      <ol>
        {rows}
      </ol>
    </div>
  )
}

export default List
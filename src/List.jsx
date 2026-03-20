import Todo from "./Todo"

const List = ({todos, onDelete}) => {
  const rows = todos.map((todo) => (
    <li key={todo.id}>
      <Todo id={todo.id} todo={todo.todo} onDelete={onDelete} />
    </li>
  ))

  return (
    <div>
      <ol className="text-teal-300 list-decimal list-outside p-7 font-bold text-2xl">
        {rows}
      </ol>
    </div>
  )
}

export default List
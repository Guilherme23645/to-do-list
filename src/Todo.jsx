const Todo = ({id, todo, onDelete}) => {
  return (
    <div className="text-teal-300 text-2xl font-bold pb-4 w-fit">
        {todo}
        <button
          onClick={() => onDelete(id)}
          className="bg-teal-300 ml-2 p-2 rounded-lg font-bold text-black active:bg-black active:text-teal-300 active:border active:border-teal-300 cursor-pointer"
        >
          Delete
        </button>
    </div>
  )
}

export default Todo
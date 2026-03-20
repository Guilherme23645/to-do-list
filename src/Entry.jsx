const Entry = ({text, onTextChange, onAdd}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd()
  }

  return (
    <div className="pb-4">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          className="border border-teal-300 p-2 w-3/4 rounded-lg mr-1 text-2xl text-teal-300 focus:border focus:border-teal-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-teal-300 p-2 rounded-lg font-bold text-2xl active:bg-black active:text-teal-300 active:border active:border-teal-300 cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default Entry
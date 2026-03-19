const Entry = ({text, onTextChange, onAdd}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => onTextChange(e.target.value)}/>{" "}
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Entry
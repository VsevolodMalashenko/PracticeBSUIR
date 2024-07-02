const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = React.useState('')

  const handleInputChange = (e) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTodo.trim() !== '') {
      addTodo(newTodo)
      setNewTodo('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Create a new todo"
      />
      <button type="submit">Add</button>
    </form>
  )
}

const TodoItem = ({ todo }) => {
  return <li>{todo}</li>
}

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  )
}

const App = () => {
  const [todoItems, setTodoItems] = React.useState([])

  const addTodo = (todo) => {
    setTodoItems([...todoItems, todo])
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todoItems} />
    </div>
  )
}

const container = document.getElementById('App')
const root = ReactDOM.createRoot(container)
root.render(<App />)

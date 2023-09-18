import { useState } from 'react'
import { TFilter, ITodo } from './types'
import { Form } from './components/Form/Form'
import { TodoList } from './components/TodoList/TodoList'
import { Options } from './components/Options/Options'

export const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: '1cc97bcd-b6bf-4e93-83ec-7aff301fa339',
      text: 'Тествовое задание',
      completed: false,
    },
    {
      id: '1dab8caa-4e0f-4dd0-abff-105eed601b8a',
      text: 'Прекрасный код',
      completed: true,
    },
    {
      id: 'b6ce0292-51d3-4e6a-b78d-2e87da068a42',
      text: 'Покрытие тестами',
      completed: false,
    },
  ])
  const [filter, setFilter] = useState<TFilter>('all')

  const changeTodo = (id: string) => {
    setTodos(
      todos.map((task) =>
        task.id !== id ? task : { ...task, completed: !task.completed }
      )
    )
  }
  const addTodo = (newTodo: ITodo) => {
    setTodos([newTodo, ...todos])
  }
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const activeTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  const filterTodos = () => {
    if (filter === 'active') return activeTodos
    if (filter === 'completed') return completedTodos
    return todos
  }
  const filteredTodos = filterTodos()

  return (
    <div className='app'>
      <h1>Todos</h1>
      <div className='content'>
        <Form addTodo={addTodo} />
        <TodoList todos={filteredTodos} changeTodo={changeTodo} />
        <Options
          activeTodosCount={activeTodos.length}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  )
}

import { FC } from 'react'
import { ITodo } from '../../types'
import { Todo } from '../Todo/Todo'
import styles from './TodoList.module.css'

interface Props {
  todos: ITodo[]
  changeTodo: (id: string) => void
}

export const TodoList: FC<Props> = ({ todos, changeTodo }) => {
  if (!todos.length) {
    return <div className={styles.text}>Список задач пуст!</div>
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} changeTodo={changeTodo} />
        </li>
      ))}
    </ul>
  )
}

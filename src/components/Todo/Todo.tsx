import clsx from 'clsx'
import { FC } from 'react'
import { ITodo } from '../../types'
import styles from './Todo.module.css'

interface Props {
  todo: ITodo
  changeTodo: (id: string) => void
}

export const Todo: FC<Props> = ({ todo, changeTodo }) => {
  return (
    <div className={clsx(styles.todo, todo.completed && styles.completed)}>
      <input
        id={todo.id}
        className={styles.input}
        type='checkbox'
        checked={todo.completed}
        onChange={() => changeTodo(todo.id)}
      />
      <label htmlFor={todo.id} className={styles.label} data-testid='label'>
        <span className={styles.text}>{todo.text}</span>
      </label>
    </div>
  )
}

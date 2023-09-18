import { FC, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ITodo } from '../../types'
import styles from './Form.module.css'

interface Props {
  addTodo: (todo: ITodo) => void
}

export const Form: FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo.trim()) {
      const newTask: ITodo = {
        id: uuidv4(),
        text: todo,
        completed: false,
      }
      addTodo(newTask)
      setTodo('')
      inputRef.current?.focus()
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='What needs to be done?'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
      />
      <button className={styles.btn} type='submit'>
        Add
      </button>
    </form>
  )
}

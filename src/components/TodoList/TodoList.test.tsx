import { describe, expect, it } from 'vitest'
import { TodoList } from './TodoList'
import { render, screen } from '../../utils/test-utils'

describe('TodoList', () => {
  it('should render empty list', () => {
    render(<TodoList todos={[]} changeTodo={() => {}} />)
    expect(screen.getByText(/Список задач пуст/i)).toBeDefined()
  })

  it('should render list', () => {
    const todos = [
      {
        id: '1cc97bcd-b6bf-4e93-83ec-7aff301fa339',
        text: 'Тествовое задание',
        completed: false,
      },
    ]
    render(<TodoList todos={todos} changeTodo={() => {}} />)
    expect(screen.getByText(/Тествовое задание/i)).toBeDefined()
  })
})

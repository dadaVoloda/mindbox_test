import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, userEvent } from '../../utils/test-utils'
import { Todo } from './Todo'

describe('Todo', () => {
  const todo = {
    id: '1cc97bcd-b6bf-4e93-83ec-7aff301fa339',
    text: 'Тествовое задание',
    completed: false,
  }
  const mockHandler = vi.fn()

  beforeEach(() => {
    render(<Todo todo={todo} changeTodo={mockHandler} />)
  })

  it('should render todo', () => {
    expect(screen.getByText(/Тествовое задание/i)).toBeDefined()
  })

  it('should call event handler', async () => {
    const label = screen.getByTestId('label')
    await userEvent.click(label)

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})

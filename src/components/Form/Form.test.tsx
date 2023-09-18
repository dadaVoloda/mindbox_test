import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, userEvent } from '../../utils/test-utils'
import { Form } from './Form'

describe('Form', () => {
  const mockHandler = vi.fn()
  beforeEach(() => {
    render(<Form addTodo={mockHandler} />)
  })

  it('should change input value', async () => {
    const input = screen.getByRole('textbox')

    expect(input).toBeDefined()
    await userEvent.type(input, 'test')
    expect(input).toHaveValue('test')
  })

  it('should call event handler', async () => {
    const button = screen.getByRole('button')
    const input = screen.getByRole('textbox')

    await userEvent.type(input, 'test')
    await userEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})

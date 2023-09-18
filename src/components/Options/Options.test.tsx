import { describe, expect, it, vi } from 'vitest'
import { render, screen, userEvent } from '../../utils/test-utils'
import { Options } from './Options'

describe('Options', () => {
  it('should render and call event handler', async () => {
    const mockHandler = vi.fn()
    render(
      <Options
        activeTodosCount={2}
        setFilter={() => {}}
        clearCompleted={mockHandler}
      />
    )

    const button = screen.getByText(/Clear completed/i)
    expect(button).toBeDefined()

    await userEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})

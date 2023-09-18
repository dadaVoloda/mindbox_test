import { describe, expect, it, vi } from 'vitest'
import { render, screen, userEvent } from '../../utils/test-utils'
import { Filter } from './Filter'

describe('Filter', () => {
  it('should render and call event handler', async () => {
    const mockHandler = vi.fn()
    render(
      <Filter
        setFilter={mockHandler}
        filters={[
          {
            text: 'All',
            value: 'all',
          },
        ]}
      />
    )

    const button = screen.getByText(/All/i)
    expect(button).toBeDefined()

    await userEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})

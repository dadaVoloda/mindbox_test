import { describe, expect, it } from 'vitest'
import { App } from './App'
import { render, screen } from './utils/test-utils'

describe('App', () => {
  it('should render App', () => {
    render(<App />)
    expect(screen.getByText(/Todos/i)).toBeDefined()
  })
})

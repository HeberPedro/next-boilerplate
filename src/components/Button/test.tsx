import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from '.'

describe('[COMPONENT]: Button', () => {
  it('It should render button', () => {
    const mockText = 'Test'

    const { container } = render(<Button>{mockText}</Button>)
    const button = screen.getByRole('button', { name: mockText })

    expect(button).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('It should run onClick function when button is pressed', () => {
    const mockOnClick = jest.fn()

    render(<Button onClick={mockOnClick()} />)
    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})

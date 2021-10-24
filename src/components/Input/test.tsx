import { render } from '@testing-library/react'

import Input from '.'

describe('[COMPONENT]: Input', () => {
  it('It should render input', () => {
    const mockText = 'Test'

    const { container } = render(<Input name={mockText} />)

    expect(container).toMatchSnapshot()
  })
})

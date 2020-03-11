import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders start game link', () => {
  const { getByTestId } = render(<App />)
  const linkElement = getByTestId('startGame')
  expect(linkElement).toBeInTheDocument()
})

import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('render', () => {
    render(<Button>Test</Button>);
    const button = screen.getByText('Test');
    expect(button).toBeInTheDocument(); 

  })
})
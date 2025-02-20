import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {

  it('fires an event on onClick', () => {
    const fn = jest.fn();
    render(<Button onClick={fn}>testBtn</Button>);

    const button = screen.getByText('testBtn');
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });
});
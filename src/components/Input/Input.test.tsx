import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

describe('Input', () => {
  it('renders with errorMessage', () => {
    render(<Input id="test" label="test" errorMessage="error" />);
    
    const inputElement = screen.getByLabelText(/test/i);
    console.log(inputElement)
    // 입력 값 변경
    fireEvent.change(inputElement, { target: { value: 'test' } });
    
    // toHaveValue로 값 확인
    expect(inputElement).toHaveValue('test');
  });
});

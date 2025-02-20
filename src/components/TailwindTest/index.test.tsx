import React from "react"
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import TailwindCSSTEST from "."

describe('TailwindTest', () => {
  const { container } = render(<TailwindCSSTEST />);
  const test = screen.getByText('test');
expect(test).toBeInTheDocument();
})
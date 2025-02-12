import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button = ({ ...props}: ButtonProps) => {
  return <button {...props}>{props.children}</button>
}

export default Button;
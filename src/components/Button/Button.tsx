interface ButtonProps {
  text: string;
}

const Button = ({text , ...props}: ButtonProps) => {
  return <button {...props}>{text}</button>
}

export default Button;
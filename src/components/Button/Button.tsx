import React from "react"
import "../../../src/styles/globals.css"
import clsx from "clsx";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: any
}

function Button ({ variant = "primary"  ,...props}: ButtonProps) {
  const ButtonStyle = clsx({
    "bg-pink-60 rounded-8 text-10-500 text-gray-0 px-4 pt-1 inline-block text-nowrap w-fit":
      variant === "primary",
    "rounded-32 border-gray-100-opacity-5 text-15-700 border bg-purple-5 px-12 py-6 text-purple-50 text-nowrap":
      variant === "secondary",
    "rounded-32 border-gray-100-opacity-5 text-11-500 border bg-purple-5 px-8 py-2 text-purple-50 text-nowrap":
      variant === "secondarySmall",
    "rounded-4 border-gray-100-opacity-5 text-11-500 border bg-purple-5 px-6 text-purple-50 text-nowrap":
      variant === "secondarySmallSquare",
  });
  return <button {...props} className={ButtonStyle}>{props.children}</button>
}

export default Button;
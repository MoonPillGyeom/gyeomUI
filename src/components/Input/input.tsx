import React, { ComponentProps, useState } from "react";

interface InputProps extends ComponentProps<"input"> {
  /** input의 id 속성입니다. name 속성도 동일하게 적용됩니다. */
  id: string;
  /** input의 label 속성입니다. */
  label: string;
  /** input의 error message 입니다. */
  errorMessage?: string;
  /** input 의 타입입니다. text, email, password */
  type?: "text" | "email" | "password";
}

function Input({ id, label, errorMessage = "", type = "text", disabled, ...props }: InputProps) {
  const [hasValue, setHasValue] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    setIsFocused(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ position: "relative" }}>
        <input
          id={id}
          name={id}
          required
          type={type}
          placeholder=" "
          onBlur={handleBlur}
          onFocus={() => setIsFocused(true)}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "4px",
            border: `1px solid ${
              errorMessage ? "#D32F2F" : isFocused ? "#6200EE" : "#BDBDBD"
            }`,
            backgroundColor: disabled ? "#F5F5F5" : "white",
            color: disabled ? "#9E9E9E" : "#212121",
            outline: "none",
            transition: "border-color 0.2s ease-in-out, background-color 0.2s ease-in-out",
          }}
          {...props}
        />
        <label
          htmlFor={id}
          style={{
            position: "absolute",
            left: "12px",
            top: hasValue || isFocused ? "4px" : "50%",
            transform: hasValue || isFocused ? "none" : "translateY(-50%)",
            fontSize: hasValue || isFocused ? "12px" : "14px",
            color: errorMessage ? "#D32F2F" : isFocused ? "#6200EE" : "#757575",
            transition: "all 0.2s ease-in-out",
          }}
        >
          {label}
        </label>
      </div>
      {errorMessage && (
        <span style={{ marginLeft: "10px", fontSize: "13px", color: "#D32F2F" }}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default Input;

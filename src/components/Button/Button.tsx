import { ComponentProps, ReactNode, CSSProperties } from "react";

// 버튼 Props 타입 정의
interface ButtonProps extends ComponentProps<"button"> {
  /** 버튼의 내용을 지정합니다. */
  children: ReactNode;
  /** 버튼 태그의 type 속성을 지정합니다. */
  type?: "button" | "submit" | "reset";
  /** 버튼 스타일의 타입을 나타냅니다. */
  variant?: "primary" | "secondary" | "danger";
  /** 버튼의 너비를 지정합니다. (기본값: 100%) */
  width?: string;
  /** 버튼의 높이를 지정합니다. (기본값: 100%) */
  height?: string;
  /** 버튼 비활성화 여부를 지정합니다. */
  disabled?: boolean;
  /** 버튼의 크기를 지정합니다. small, modal, 또는 기본 크기 */
  size?: "small" | "modal" | "default";
}

function Button({
  children,
  type = "button",
  variant = "primary",
  width = "100%",
  height = "100%",
  disabled = false,
  size = "default",
  ...buttonProps
}: ButtonProps) {
  const baseStyle: CSSProperties = {
    width,
    height,
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    cursor: disabled ? "not-allowed" : "pointer",
    border: "1px solid transparent",
    fontWeight: 500,
  };

  const variantStyles: Record<string, CSSProperties> = {
    primary: { backgroundColor: "#8f00ff", color: "#FFFFFF" },
    secondary: {
      backgroundColor: "#0000001A",
      color: "#323232CC",
      borderColor: "#00000033",
    },
    danger: { backgroundColor: "white", color: "red", borderColor: "red" },
  };

  const sizeStyles: Record<string, CSSProperties> = {
    default: { borderRadius: "8px", padding: "8px 24px", fontSize: "16px" },
    small: { borderRadius: "6px", padding: "6px 12px", fontSize: "13px" },
    modal: { borderRadius: "6px", padding: "8px 16px", fontSize: "14px" },
  };

  // Disabled 스타일 추가
  const disabledStyle: CSSProperties = disabled
    ? {
      backgroundColor: "#C8C8C880",
      color: "#64646480",
      borderColor: "#9696964D",
      }
    : {};

  // Hover 스타일 추가 (부드러운 색 변화 적용)
  const hoverStyles: Record<string, CSSProperties> = {
    primary: { backgroundColor: "#7200cc" }, // 보라색 투명도 조정
    secondary: { backgroundColor: "#00000026" },
    danger: { backgroundColor: "#FF00001A" }, 
  };

  return (
    <button
      type={type}
      disabled={disabled}
      style={{
        ...baseStyle,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...disabledStyle,
      }}
      onMouseEnter={(e) => {
        if (!disabled) Object.assign(e.currentTarget.style, hoverStyles[variant]);
      }}
      onMouseLeave={(e) => {
        if (!disabled) Object.assign(e.currentTarget.style, variantStyles[variant]);
      }}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;

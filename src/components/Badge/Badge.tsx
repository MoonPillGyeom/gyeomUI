import { ComponentProps, ReactNode, CSSProperties } from "react";

interface BadgeProps extends ComponentProps<"span"> {
  /** 뱃지의 내용을 지정합니다. */
  children: ReactNode;
  /** 뱃지의 모양을 지정합니다. */
  variant: "primary" | "secondary" | "secondarySmall" | "secondarySmallSquare";
}

function Badge({ children, variant = "primary" }: BadgeProps) {
  // 기본 스타일
  const baseStyle: CSSProperties = {
    display: "inline-block",
    whiteSpace: "nowrap",
    width: "fit-content",
    fontWeight: 500,
  };

  // Variant 스타일
  const variantStyles: Record<string, CSSProperties> = {
    primary: {
      backgroundColor: "#FF4081", 
      borderRadius: "8px",
      color: "#FFFFFF", 
      fontSize: "12px",
      padding: "4px 8px",
    },
    secondary: {
      backgroundColor: "#F3E5F5", 
      border: "1px solid rgba(0, 0, 0, 0.05)", 
      borderRadius: "32px",
      color: "#6A1B9A", 
      fontSize: "15px",
      fontWeight: 700,
      padding: "6px 12px",
    },
    secondarySmall: {
      backgroundColor: "#F3E5F5",
      border: "1px solid rgba(0, 0, 0, 0.05)",
      borderRadius: "32px",
      color: "#6A1B9A",
      fontSize: "11px",
      padding: "2px 8px",
    },
    secondarySmallSquare: {
      backgroundColor: "#F3E5F5",
      border: "1px solid rgba(0, 0, 0, 0.05)",
      borderRadius: "4px",
      color: "#6A1B9A",
      fontSize: "11px",
      padding: "0px 6px",
    },
  };

  return <span style={{ ...baseStyle, ...variantStyles[variant] }}>{children}</span>;
}

export default Badge;

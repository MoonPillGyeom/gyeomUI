import React, { CSSProperties } from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 스켈레톤의 크기를 조절합니다. */
  width?: string;
  height?: string;
  /** 둥근 모서리 여부를 설정합니다. */
  rounded?: boolean;
}





function Skeleton({ width = "100%", height = "16px", rounded = false, ...props }: SkeletonProps) {

  const baseStyle: CSSProperties = {
    animation: "pulse 1.5s infinite",
    backgroundColor: "#e5e7eb",
    transition: "background-color 0.3s ease-in-out",
  };

  const variantStyles: Record<string, CSSProperties> = {
    default: {},
    rounded: { borderRadius: "8px" },
  };

  return (
    <div
    {...props}
      style={{
        ...baseStyle,
        width,
        height,
        ...variantStyles[rounded ? "rounded" : "default"],
      }}
    />
  );
}

export default Skeleton;

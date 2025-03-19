import React, { useEffect, useState } from "react";

interface ToastProps {
  /** Toast에 들어갈 내용입니다. */
  message: string;
  /** Toast가 보여지는 시간입니다. */
  duration?: number;
  /** Toast를 닫기 위한 함수입니다. */
  onClose: () => void;
}

function Toast({ message, duration = 3000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    // 지정된 시간이 지나면 다시 아래로 사라짐
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: visible ? "50px" : "-100px", // 위로 올라왔다가 다시 내려감
        left: "50%",
        transform: "translateX(-50%)",
        padding: "14px 24px",
        background: "linear-gradient(135deg, #8F00FF, #B266FF)",
        color: "#fff",
        borderRadius: "10px",
        fontSize: "15px",
        fontWeight: "bold",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        transition: "bottom 0.3s ease-in-out, opacity 0.3s ease-in-out",
        opacity: visible ? 1 : 0, // 페이드 인/아웃 효과
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        ✖
      </button>
    </div>
  );
};

export default Toast;

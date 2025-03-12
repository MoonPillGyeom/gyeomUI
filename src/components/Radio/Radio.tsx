import { ReactNode, createContext, useContext, useState } from "react";

interface RadioGroupProps {
  /** 라디오 그룹의 이름 (name 속성) */
  name: string;
  /** 기본 선택값 */
  defaultValue?: string;
  /** 선택 값이 변경될 때 호출되는 콜백 */
  onChange?: (value: string) => void;
  /** 그룹 내부의 라디오 버튼들 */
  children: ReactNode;
}

/** Context를 이용해 상태 공유 */
const RadioContext = createContext<{
  selectedValue: string;
  setSelectedValue: (value: string) => void;
} | null>(null);

/** 라디오 그룹 */
function RadioGroup({ name, defaultValue, onChange, children }: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <RadioContext.Provider value={{ selectedValue, setSelectedValue }}>
      <fieldset style={styles.group} aria-labelledby={name}>{children}</fieldset>
    </RadioContext.Provider>
  );
}

/** 라디오 라벨 */
function RadioLabel({ children }: { children: ReactNode }) {
  return <legend style={styles.label}>{children}</legend>;
}

interface RadioItemProps {
  value: string;
  children: ReactNode;
}

/** 개별 라디오 버튼 */
function RadioItem({ value, children }: RadioItemProps) {
  const context = useContext(RadioContext);
  if (!context) throw new Error("RadioItem must be used within a RadioGroup");

  const { selectedValue, setSelectedValue } = context;
  const isSelected = selectedValue === value;

  return (
    <label style={{ ...styles.item, ...(isSelected ? styles.selected : {}) }}>
      <input
        type="radio"
        name="radio"
        value={value}
        checked={isSelected}
        onChange={() => setSelectedValue(value)}
        style={styles.input}
      />
      <span style={styles.circle}>{isSelected && <span style={styles.dot} />}</span>
      {children}
    </label>
  );
}

/** 스타일 정의 */
const styles = {
  group: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold" as const,
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    padding: "6px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    transition: "background 0.2s ease",
  },
  selected: {
    backgroundColor: "#8f00ff",
    color: "#fff",
  },
  input: {
    display: "none",
  },
  circle: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    border: "2px solid #8f00ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#8f00ff",
  },
};

/** 객체로 내보내기 */
const Radio = Object.assign(RadioGroup, {
  Label: RadioLabel,
  Item: RadioItem,
});

export default Radio;

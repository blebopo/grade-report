import type { GradeRange } from "../types/grades";
import "../styles/DropdownButton.css";

interface DropdownButtonProps {
  grade: GradeRange;
  addFilter: () => void;
}

export default function DropdownButtonComponent({
  grade,
  addFilter,
}: DropdownButtonProps) {
  return (
    <div
      className="filter-symbol-container"
      onClick={addFilter}
      style={{ "--grade-color": grade.color } as React.CSSProperties}
    >
      <div
        className="grade-color"
        style={{ backgroundColor: grade.color }}
      ></div>
      <div className="grade-symbol">{grade.symbol}</div>
    </div>
  );
}

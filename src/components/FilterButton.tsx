import type { GradeRange } from "../types/grades";

interface FilterButtonProp {
  grade: GradeRange;
  removeFilter: () => void;
}

export default function FilterButtonComponent({
  grade,
  removeFilter,
}: FilterButtonProp) {
  return (
    <div
      className="grade-symbol-container"
      style={{ boxShadow: `2px 2px 2px ${grade.gradientFrom}` }}
    >
      <div
        className="grade-color"
        style={{ backgroundColor: grade.color }}
      ></div>
      <div className="grade-symbol">{grade.symbol}</div>
      <button
        className="close-button"
        style={{ color: grade.color }}
        onClick={removeFilter}
      >
        X
      </button>
    </div>
  );
}

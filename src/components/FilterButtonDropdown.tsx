import "../styles/FilterButtonDropdown.css";
import type { GradeRange } from "../types/grades";
import FilterButtonComponent from "./FilterButton";

interface FilterButtonDropdownProps {
  grades: {
    grade: GradeRange;
    isSelected: boolean;
  }[];
  removeFilter: () => void;
}

export default function FilterButtonDropdownComponent({
  grades,
  removeFilter,
}: FilterButtonDropdownProps) {
  return (
    <>
      <div className="custom-dropdown">
        {grades.map((grade) => (
          <FilterButtonComponent
            grade={grade.grade}
            removeFilter={removeFilter}
          />
        ))}
      </div>
    </>
  );
}

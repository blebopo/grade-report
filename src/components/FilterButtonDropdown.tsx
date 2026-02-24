import { Component } from "react";
import "../styles/FilterButtonDropdown.css";
import type { GradeRange } from "../types/grades";
import FilterButtonComponent from "./FilterButton";

interface FilterButtonDropdownProps {
  grades: {
    grade: GradeRange;
    isSelected: boolean;
  }[];
  isFilterHidden: boolean;
  removeFilter: () => void;
}

export default class FilterButtonDropdownComponent extends Component<FilterButtonDropdownProps> {
  render() {
    const { grades, removeFilter, isFilterHidden } = this.props;
    let hideFilter = isFilterHidden;
    return (
      <>
        <div
          className="custom-dropdown"
          style={{ display: hideFilter ? "none" : "" }}
        >
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
}

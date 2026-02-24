import { Component } from "react";
import "../styles/FilterButtonDropdown.css";
import type { GradeRange } from "../types/grades";
import DropdownButtonComponent from "./DropdownButton";

interface FilterButtonDropdownProps {
  grades: {
    grade: GradeRange;
    isSelected: boolean;
  }[];
  isFilterHidden: boolean;
  addFilter: (grade: GradeRange) => void;
}

export default class FilterButtonDropdownComponent extends Component<FilterButtonDropdownProps> {
  render() {
    const { grades, addFilter, isFilterHidden } = this.props;
    let hideFilter = isFilterHidden;
    return (
      <>
        <div
          className="custom-dropdown"
          style={{ display: hideFilter ? "none" : "" }}
        >
          {grades.map((grade) => (
            <DropdownButtonComponent
              grade={grade.grade}
              addFilter={() => addFilter(grade.grade)}
            />
          ))}
        </div>
      </>
    );
  }
}

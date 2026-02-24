import { gradeRanges } from "../types/grades";
import "../styles/Legend.css";
import AddFilterButtonComponent from "./AddFilterButton";
import FilterButtonComponent from "./FilterButton";
import FilterButtonDropdownComponent from "./FilterButtonDropdown";

export default function LegendComponent() {
  // Determine buttons to display
  const displayedFilters = [
    ...gradeRanges.map((grade) => {
      return { 
        grade, 
        isSelected: false 
      };
    }),
  ];
  const hiddenFilters = [...gradeRanges];
  // If buttons have been selected add them to buttons to display
  function removeFilter() {}
  function addFilter() {
    // On click show dropdown
    displayedFilters.filter(grade => !grade.isSelected)
  }
  return (
    <div className="grade-legend">
      {displayedFilters
        .filter((grade) => grade.isSelected)
        .map((grade) => {
          return (
            <FilterButtonComponent
              grade={grade.grade}
              removeFilter={removeFilter}
            />
          );
        })}
      <AddFilterButtonComponent addFilter={addFilter} />
      <FilterButtonDropdownComponent />
    </div>
  );
}

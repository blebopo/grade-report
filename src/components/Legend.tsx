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
        isSelected: false,
      };
    }),
  ];
  const hiddenFilters = displayedFilters.filter((grade) => !grade.isSelected);
  // If buttons have been selected add them to buttons to display
  function removeFilter() {}
  function addFilter() {
    // On click show dropdown
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
      <div className="filter-addition-container">
        <AddFilterButtonComponent addFilter={addFilter} />
        <FilterButtonDropdownComponent
          grades={hiddenFilters}
          removeFilter={removeFilter}
        />
      </div>
    </div>
  );
}

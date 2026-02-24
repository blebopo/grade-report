import { gradeRanges } from "../types/grades";
import "../styles/Legend.css";
import AddFilterButtonComponent from "./AddFilterButton";
import FilterButtonComponent from "./FilterButton";

export default function LegendComponent() {
  // Determine buttons to display
  const displayedFilters = [...gradeRanges];
  const hiddenFilters = [...gradeRanges];
  // If buttons have been selected add them to buttons to display
  function removeFilter() {}
  function addFilter() {}
  return (
    <div className="grade-legend">
      {displayedFilters.map((grade) => {
        return (
          <FilterButtonComponent grade={grade} removeFilter={removeFilter} />
        );
      })}
      <AddFilterButtonComponent addFilter={addFilter} />
    </div>
  );
}

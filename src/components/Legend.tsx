import { gradeRanges } from "../types/grades";
import "../styles/Legend.css";
import AddFilterButtonComponent from "./AddFilterButton";
import FilterButtonComponent from "./FilterButton";
import FilterButtonDropdownComponent from "./FilterButtonDropdown";
import { Component } from "react";

export default class LegendComponent extends Component {
  hideFilter = true;
  render() {
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
    const addFilter = () => {
      // On click show dropdown
      console.log("Before" + this.hideFilter);
      if (this.hideFilter) this.hideFilter = false;
      else this.hideFilter = true;
      this.forceUpdate();
      console.log("After" + this.hideFilter);
    };

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
        <div key={this.hideFilter + ""} className="filter-addition-container">
          <AddFilterButtonComponent addFilter={addFilter} />
          <FilterButtonDropdownComponent
            grades={hiddenFilters}
            removeFilter={removeFilter}
            isFilterHidden={this.hideFilter}
          />
        </div>
      </div>
    );
  }
}

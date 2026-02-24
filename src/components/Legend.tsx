import { gradeRanges, type GradeRange } from "../types/grades";
import "../styles/Legend.css";
import AddFilterButtonComponent from "./AddFilterButton";
import FilterButtonComponent from "./FilterButton";
import FilterButtonDropdownComponent from "./FilterButtonDropdown";
import { Component } from "react";

export default class LegendComponent extends Component {
  hideFilter = true;
  displayedFilters = [
    ...gradeRanges.map((grade) => {
      return {
        grade,
        isSelected: true,
      };
    }),
  ];


  render() {
    // Determine buttons to display

    // If buttons have been selected add them to buttons to display
    const removeFilter = (gradeToRemove: GradeRange) => {
      // Remove filters from *legend
      this.displayedFilters.map((button) => {
        if (button.grade === gradeToRemove) {
          // Change button selection
          button.isSelected = false;
        }
      });

      // Rerender
      this.forceUpdate();
    };

    const addFilter = (gradeToRemove: GradeRange) => {
      this.displayedFilters.map((button) => {
        if (button.grade === gradeToRemove) {
          // Change button selection
          button.isSelected = true;
        }
      });
      // Rerender
      this.forceUpdate();
    };

    const toggleDropdown = () => {
      // Dropdown toggle
      // On click show dropdown
      if (this.hideFilter) this.hideFilter = false;
      else this.hideFilter = true;
      this.forceUpdate();
    };

    return (
      <div className="grade-legend">
        {this.displayedFilters
          .filter((grade) => grade.isSelected)
          .map((grade) => {
            return (
              <FilterButtonComponent
                grade={grade.grade}
                removeFilter={() => removeFilter(grade.grade)}
              />
            );
          })}
        <div className="filter-addition-container">
          <AddFilterButtonComponent toggleOnOff={toggleDropdown} />
          <FilterButtonDropdownComponent
            grades={this.displayedFilters.filter((grade) => !grade.isSelected)}
            addFilter={(grade) => addFilter(grade)}
            isFilterHidden={this.hideFilter}
          />
        </div>
      </div>
    );
  }
}

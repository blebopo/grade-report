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
  hiddenFilters = this.displayedFilters.filter((grade) => !grade.isSelected);

  render() {
    // Determine buttons to display

    // If buttons have been selected add them to buttons to display
    const removeFilter = (gradeToRemove: GradeRange) => {
      // Remove filters from *legend

      this.displayedFilters.map((button) => {
        if (button.grade === gradeToRemove) {
          console.log(button);
          // Change button
          button.isSelected = false;
          // Update hidden filters
          this.hiddenFilters.push(button);
        }
      });
      // Remove unselected filter from filters that need to be displayed
      this.displayedFilters = this.displayedFilters.filter(
        (grade) => grade.isSelected,
      );

      

      // Rerender
      this.forceUpdate();
    };
    const addFilter = (gradeToRemove: GradeRange) => {
      // On click show dropdown
      console.log("Before" + this.hideFilter);

      
      this.hiddenFilters.map((filterButton) => {
        if(gradeToRemove === filterButton.grade){
          filterButton.isSelected = true;
          console.log("Fix")
        }
      });

      // Update displayed filters
      this.hiddenFilters = this.hiddenFilters.filter(
        (grade) => !grade.isSelected,
      );
      this.forceUpdate();

      console.log("After" + this.hideFilter);
      // Click on filter
    };

    const toggleDropdown = () => {
      // Dropdown toggle
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
            grades={this.hiddenFilters}
            addFilter={(grade) => addFilter(grade)}
            isFilterHidden={this.hideFilter}
          />
        </div>
      </div>
    );
  }
}

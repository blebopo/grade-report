import { gradeRanges, type GradeRange } from "../types/grades";
import "../styles/Legend.css";
import AddFilterButtonComponent from "./AddFilterButton";
import FilterButtonComponent from "./FilterButton";
import FilterButtonDropdownComponent from "./FilterButtonDropdown";
import { Component } from "react";
import ReportCardsLayout from "../layouts/ReportCardsLayout";
import { students, type Student } from "../data/StudentData";

interface LegendProps {
  sortedStudents: Student[];
}

export default class LegendComponent extends Component<LegendProps> {
  hideFilter = true;
  displayedFilters = [
    ...gradeRanges.map((grade) => {
      return {
        grade,
        isSelected: true,
      };
    }),
  ];
  sortedStudents = [
    ...students
      .sort((a, b) => b.score - a.score)
      .map((student) => {
        return { student, isDisplayed: true };
      }),
  ];

  render() {
    // const sortedStudents = [...students].sort((a, b) => b.score - a.score);

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

      // Determine which students will be displayed
      this.displayedFilters.map((button) => {
        if (button.grade.symbol === "A") {
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
      <>
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
              grades={this.displayedFilters.filter(
                (grade) => !grade.isSelected,
              )}
              addFilter={(grade) => addFilter(grade)}
              isFilterHidden={this.hideFilter}
            />
          </div>
        </div>
        <ReportCardsLayout
          sortedStudents={this.sortedStudents
            .filter((student) => student.isDisplayed)
            .map((student) => student.student)}
        />
      </>
    );
  }
}

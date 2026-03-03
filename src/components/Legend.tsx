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

  // Use of mutable data structure, note this is not the react way.
  displayedFilters = [
    ...gradeRanges.map((grade) => {
      return {
        grade,
        isSelected: true,
      };
    }),
  ];
  // New data structure created to help determine if student 
  // should be rendered or not. { student : Student, isDisblayed : boolean}
  sortedStudents = [
    ...students
      .sort((a, b) => b.score - a.score)
      .map((student) => {
        return { 
          student, 
          isDisplayed: true
        };
      }),
  ];

  render() {

    // The logic to filter out 
    const removeFilter = (gradeToRemove: GradeRange) => {
      // Remove filters from *legend
      this.displayedFilters.map((button) => {
        if (button.grade === gradeToRemove) {
          // Change button selection
          button.isSelected = false;
        }
      });
      // Determine which students will not be displayed
      this.displayedFilters.map( (button) => {
        if(!button.isSelected && button.grade.symbol === "A"){
          // Find all A students and switch off their rendering
          this.sortedStudents
            .filter(
              (student) =>
                student.student.score >= 80 && student.student.score <= 100,
            )
            .map((student) => (student.isDisplayed = false));
        }
        if(!button.isSelected && button.grade.symbol === "B"){
          // Find all B students and switch off their rendering
          this.sortedStudents
            .filter(
              (student) =>
                student.student.score >= 70 && student.student.score <= 79,
            )
            .map((student) => (student.isDisplayed = false));
        }
        if(!button.isSelected && button.grade.symbol === "C"){
          // Find all C students and switch off their rendering
          this.sortedStudents
            .filter(
              (student) =>
                student.student.score >= 60 && student.student.score <= 69,
            )
            .map((student) => (student.isDisplayed = false));
        }
        if(!button.isSelected && button.grade.symbol === "D"){
          // Find all D students and switch off their rendering
          this.sortedStudents
            .filter(
              (student) =>
                student.student.score >= 50 && student.student.score <= 59,
            )
            .map((student) => (student.isDisplayed = false));
        }
        if(!button.isSelected && button.grade.symbol === "F"){
          // Find all F students and switch off their rendering
          this.sortedStudents
            .filter(
              (student) =>
                student.student.score >= 0 && student.student.score <= 49,
            )
            .map((student) => (student.isDisplayed = false));
        }
      })
      
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
        // If the filter is activated and the filter is targeting all A students
        if (button.isSelected && button.grade.symbol === "A") {
          // Find all A students
          this.sortedStudents
            .filter(
              (student) =>
                student.student.score >= 80 && student.student.score <= 100,
            )
            .map((student) => (student.isDisplayed = true));
        }
        if (button.isSelected && button.grade.symbol === "B") {
          // Find all B students
          this.sortedStudents
            .filter(
              (student) =>
                student.student.score >= 70 && student.student.score <= 79,
            )
            .map((student) => (student.isDisplayed = true));
        }
        if (button.isSelected && button.grade.symbol === "C") {
          // Find all C students
          this.sortedStudents
            .filter(
              (student) =>
                student.student.score >= 60 && student.student.score <= 69,
            )
            .map((student) => (student.isDisplayed = true));
        }
        if (button.isSelected && button.grade.symbol === "D") {
          // Find all D students
          this.sortedStudents
            .filter(
              (student) =>
                student.student.score >= 50 && student.student.score <= 59,
            )
            .map((student) => (student.isDisplayed = true));
        }
        if (button.isSelected && button.grade.symbol === "F") {
          // Find all F students
          this.sortedStudents
            .filter(
              (student) =>
                student.student.score >= 0 && student.student.score <= 49,
            )
            .map((student) => (student.isDisplayed = true));
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
                <FilterButtonComponent key={grade.grade.symbol}
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
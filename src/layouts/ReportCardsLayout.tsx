import { Component } from "react";
import type { Student } from "../data/StudentData";
import ReportCardComponent from "../components/ReportCard";

interface ReportCardLayoutProps {
  sortedStudents: Student[];
}

export default class ReportCardsLayout extends Component<ReportCardLayoutProps> {
  render() {
    const { sortedStudents } = this.props;
    return (
      <div className="student-reports">
        {sortedStudents.map((student, index) => {
          console.log(student.score);
          return (
            <ReportCardComponent
              key={student.name}
              id={index + 1}
              studentName={student.name}
              gradePercentage={student.score}
            />
          );
        })}
      </div>
    );
  }
}

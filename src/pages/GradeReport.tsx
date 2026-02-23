import GradeReportHeaderComponent from "../components/GradeReportHeader";
import GradeSummaryCardComponent from "../components/GradeSummaryCard";
import ReportCardComponent from "../components/ReportCard";
import "../styles/GradeReport.css";
import { students } from "../data/StudentData";

export default function GradeReportPage() {
  const sortedStudents = [...students].sort((a, b) => b.score - a.score);
  const classAverage =
    students.reduce((prevScore, student) => prevScore + student.score, 0) /
    students.length;
  const topScore = Math.max(...students.map((student) => student.score));
  const studentsPassed = students.filter(
    (student) => student.score >= 50,
  ).length;

  return (
    <>
      <GradeReportHeaderComponent />
      <div className="grade-summary-details-container">
        <GradeSummaryCardComponent
          title="class average"
          value={`${classAverage}%`}
        />
        <GradeSummaryCardComponent title="top score" value={`${topScore}%`} />
        <GradeSummaryCardComponent
          title="passing"
          value={`${studentsPassed}/${students.length}`}
        />
      </div>
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
    </>
  );
}

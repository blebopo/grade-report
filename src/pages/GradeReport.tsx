import GradeReportHeaderComponent from "../components/GradeReportHeader";
import GradeSummaryCardComponent from "../components/GradeSummaryCard";
import ReportCardComponent from "../components/ReportCard";
import "../styles/GradeReport.css";

export default function GradeReportPage() {
  return (
    <>
      <GradeReportHeaderComponent />
      <div className="grade-summary-details-container">
        <GradeSummaryCardComponent title="class average" value="71%" />
        <GradeSummaryCardComponent title="top score" value="97%" />
        <GradeSummaryCardComponent title="passing" value="7/10" />
      </div>
      <div className="student-reports">
        <ReportCardComponent
          id={1}
          studentName="Ayanda Ndlovu"
          gradePercentage={97}
        />
        <ReportCardComponent
          id={2}
          studentName="Mohit Gupta"
          gradePercentage={73}
        />
      </div>
    </>
  );
}

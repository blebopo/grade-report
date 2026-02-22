import GradeReportHeaderComponent from "../components/GradeReportHeader";
import GradeSummaryCardComponent from "../components/GradeSummaryCard";
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
    </>
  );
}

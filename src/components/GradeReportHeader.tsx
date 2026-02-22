import "../styles/GradeReportHeader.css";

export default function GradeReportHeaderComponent() {
  return (
    <header className="grade-report-header">
      <div className="academic-period-header">
        ACADEMIC YEAR {new Date().getFullYear()}
      </div>

      <div className="document-title">
        <span className="first-word">Grade</span>
        <br />
        <span className="second-word">Report</span>
      </div>
    </header>
  );
}

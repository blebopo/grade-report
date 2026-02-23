import "../styles/ReportCard.css";
import { reportCardColors } from  "../types/colors"
import { gradeRanges } from "../types/grades";

interface ReportCardProps {
  id: number;
  studentName: string;
  gradePercentage: number;
}

export default function ReportCardComponent({
  id,
  studentName,
  gradePercentage,
}: ReportCardProps) {

  const grade = gradeRanges.filter(grade => grade.min <= gradePercentage && grade.max >= gradePercentage)[0];
  const fillRatio = gradePercentage;
  const emptyRatio = 100 - gradePercentage;
  
  return (
    <div className="report-card">
      {/* First row of components */}
      <div className="report-card__first-row">
        <span className="student-rank">#{id}</span>
        <span className="grade-symbol" style={{ backgroundColor: grade.color }}>{grade.symbol}</span>
        <span className="student-name">{studentName}</span>
        <span className="symbol-description" style={{ color: grade.color }}>
          {grade.description.toUpperCase()}
        </span>
        <span className="grade-percentage" style={{ color: grade.percentageColor }}>{gradePercentage}</span>
      </div>
      <div className="report-card__second-row">
        <div className="student-percentage" style={{flexGrow : fillRatio, background: `linear-gradient(to right, ${grade.gradientFrom}, ${grade.percentageColor})`}}></div>
        <div className="total-percentage-bar" style={{flexGrow: emptyRatio}}></div>
      </div>
    </div>
  );
}

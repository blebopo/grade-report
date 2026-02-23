import { gradeRanges } from "../types/grades";
import "../styles/Legend.css";

export default function LegendComponent() {
  return (
    <div className="grade-legend">
      {...gradeRanges.map((grade) => {
        return (
          <div className="grade-symbol-container">
            <div className="grade-color" style={{ backgroundColor : grade.color }}></div><div className="grade-symbol">{grade.symbol}</div> 
          </div>
        );
      })}
    </div>
  );
}

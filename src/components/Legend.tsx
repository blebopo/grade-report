import { gradeRanges } from "../types/grades";
import "../styles/Legend.css";
import AddFilterButtonComponent from "./AddFilterButton";

export default function LegendComponent() {
  // Determine buttons to display
  const buttonsToDisplay = [];
  // If buttons have been selected add them to buttons to display

  return (
    <div className="grade-legend">
      {...gradeRanges.map((grade) => {
        return (
          <div
            className="grade-symbol-container"
            style={{ boxShadow: `2px 2px 2px ${grade.gradientFrom}` }}
          >
            <div
              className="grade-color"
              style={{ backgroundColor: grade.color }}
            ></div>
            <div className="grade-symbol">{grade.symbol}</div>
            <button className="close-button" style={{ color: grade.color }}>
              X
            </button>
          </div>
        );
      })}
      <AddFilterButtonComponent/>
    </div>
  );
}

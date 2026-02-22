import { useState } from "react";
import "./App.css";
import GradeReportPage from "./pages/GradeReport";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GradeReportPage></GradeReportPage>
    </>
  );
}

export default App;

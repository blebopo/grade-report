interface ReportCardProps {
  id: number;
  symbol: string;
  studentName: string;
  symbolDescription: string;
  gradePercentage: number;
}

export default function ReportCardComponent({
  id,
  symbol,
  studentName,
  symbolDescription,
  gradePercentage,
}: ReportCardProps) {
  return (
    <>
      {/* First row of components */}
      <span>{id}</span>
    </>
  );
}

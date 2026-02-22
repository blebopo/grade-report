import "../styles/GradeSummaryCard.css"

interface GradeSummaryCardProps {
    title : string,
    value : string
}

export default function GradeSummaryCardComponent({title, value} : GradeSummaryCardProps){
   return( 
    <div className="summary-card">
      <span className="summary-card__title">{title.toUpperCase()}</span>
      <br/>
      <span className="summary-card__value">{value}</span>      
    </div>
     );
}
import "../styles/AddFilterButton.css";

interface AddFilterButtonProps {
  toggleOnOff: () => void;
}

export default function AddFilterButtonComponent({
  toggleOnOff,
}: AddFilterButtonProps) {
  return (
    <div className="add-button-container">
      <button className="add-button" onClick={toggleOnOff}>
        +
      </button>
    </div>
  );
}

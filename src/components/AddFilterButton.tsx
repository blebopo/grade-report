import "../styles/AddFilterButton.css";

interface AddFilterButtonProps {
  addFilter: () => void;
}

export default function AddFilterButtonComponent({
  addFilter,
}: AddFilterButtonProps) {
  return (
    <div className="add-button-container">
      <button className="add-button" onClick={addFilter}>
        +
      </button>
    </div>
  );
}

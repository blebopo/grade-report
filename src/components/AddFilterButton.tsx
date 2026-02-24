import "../styles/AddFilterButton.css"

export default function AddFilterButtonComponent() {
  function addComponents() {}
  return (
    <div
      className="add-button-container"
    >
      <button className="add-button" onClick={addComponents}>
        +
      </button>
    </div>
  );
}

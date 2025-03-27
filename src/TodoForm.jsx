import { useState } from "react";

export function TodoForm(props) {
  const [newItem, setNewItem] = useState("");
  function submitForm(e) {
    e.preventDefault();

    props.onSubmit(newItem);

    setNewItem("");
  }
  return (
    <form className="new-item-form" onSubmit={submitForm}>
      <div className="form-row">
        <h1>Ashok</h1>
        <label htmlFor="item">Enter Name</label>
        <input
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          id="item"
        />
      </div>

      <button className="btn">Add Me!</button>
    </form>
  );
}

import "./style.css"

export default function App() {
  return (
    <> 
  <form className="new-item-form"> 
  <div className="form-row">
    <label htmlFor="item">Enter Name</label>
    <input type="text" id="item" />
    </div>

    <button className="btn">Add Me!</button>
  </form>

  <h1>Todo List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox"></input>
        Sample 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
}
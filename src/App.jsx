import { useState } from "react";
import "./style.css";
import { TodoForm } from "./TodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentvalue) => {
      return [
        ...currentvalue,
        { id: crypto.randomUUID(), title: title, checked: false },
      ];
    });
  }

  function toggleTodo(id, checked) {
    console.log(id, todos);
    setTodos((currentvalue) => {
      return currentvalue.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentvalue) => {
      return currentvalue.filter((todo) => todo.id !== id);
    });
  }

  console.log(todos);

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      {/* <form className="new-item-form" onSubmit={submitForm}>
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
      </form> */}

      <h1>Todo List</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  id={`checkbox-${todo.id}`}
                  checked={todo.checked}
                  onChange={(e) => {
                    toggleTodo(todo.id, e.target.checked);
                  }}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

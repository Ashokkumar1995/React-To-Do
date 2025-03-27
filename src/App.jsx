import "./style.css";
import { TodoForm } from "./TodoForm";
import { ToDoList } from "./TodoList";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", todos);
  }, [todos]);

  function addTodo(title) {
    setTodos((currentvalue) => {
      return [
        ...currentvalue,
        { id: crypto.randomUUID(), title: title, checked: false },
      ];
    });
  }

  function toggleTodo(id, checked) {
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

  return (
    <>
      <TodoForm onSubmit={addTodo} />

      <h1>Todo List</h1>
      <ToDoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
}

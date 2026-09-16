import { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";

export function TodoForm() {
  const [title, setTitle] = useState("");

  const context = useContext(TodoContext);

  if (!context) {
    return null;
  }

  const { addTodo } = context;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    addTodo(title);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter a todo"
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}

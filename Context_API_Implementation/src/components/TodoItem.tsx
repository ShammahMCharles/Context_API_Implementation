import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import type { Todo } from "../types/types";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const context = useContext(TodoContext);

  if (!context) {
    return null;
  }

  const { toggleTodo, deleteTodo } = context;

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span>{todo.title}</span>

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

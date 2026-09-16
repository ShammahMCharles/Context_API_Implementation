import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import FilterContext from "../context/FilterContext";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const todoContext = useContext(TodoContext);
  const filterContext = useContext(FilterContext);

  if (!todoContext || !filterContext) {
    return null;
  }

  const { todos } = todoContext;
  const { filter } = filterContext;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  return (
    <div>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

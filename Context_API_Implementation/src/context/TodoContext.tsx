import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import type { Todo, TodoContextType } from "../types/types";

interface TodoProviderProps {
  children: ReactNode;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const editTodo = useCallback((id: number, newTitle: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    );
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }, []);

  const value = useMemo(
    () => ({
      todos,
      addTodo,
      toggleTodo,
      deleteTodo,
      editTodo,
      clearCompleted,
    }),
    [todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoContext;

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Todo[];

  addTodo: (title: string) => void;

  toggleTodo: (id: number) => void;

  deleteTodo: (id: number) => void;

  editTodo: (id: number, newTitle: string) => void;

  clearCompleted: () => void;
}

import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoFilter } from "./components/TodoFilter";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-5">
        Todo App (Context API)
      </h1>
      <ThemeToggle />
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
}

export default App;

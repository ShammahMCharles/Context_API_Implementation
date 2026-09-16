import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoProvider } from "./context/TodoContext.tsx";
import "./index.css";
import App from "./App.tsx";
import { FilterProvider } from "./context/FilterContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoProvider>
      <FilterProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </FilterProvider>
    </TodoProvider>
  </StrictMode>,
);

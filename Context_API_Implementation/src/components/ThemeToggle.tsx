import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export function ThemeToggle() {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  const { theme, toggleTheme } = context;

  return (
    <button
      className="bg-blue-400 text-white px-4 py-2 rounded-lg"
      onClick={toggleTheme}
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

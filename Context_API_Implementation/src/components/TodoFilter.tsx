import { useContext } from "react";
import FilterContext from "../context/FilterContext";

export function TodoFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    return null;
  }

  const { setFilter } = context;

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>

      <button onClick={() => setFilter("active")}>Active</button>

      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
}

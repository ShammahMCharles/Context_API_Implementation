# Context API Todo App

A small todo application built with React, TypeScript, Vite, and the React Context API.

The app lets users:

- Add todos
- Mark todos as complete or active
- Delete todos
- Filter todos by all, active, or completed
- Switch between light and dark mode
- Keep todos in `localStorage` between page refreshes

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## How Context API Is Used

The application uses React Context to share state between components without passing data through every component as props. This avoids **prop drilling**.

The provider structure in `src/main.tsx` is:

```tsx
<TodoProvider>
  <FilterProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </FilterProvider>
</TodoProvider>
```

Each provider stores a different type of application state.

### TodoContext

`src/context/TodoContext.tsx` stores the todo list and the functions that update it:

- `todos`
- `addTodo`
- `toggleTodo`
- `deleteTodo`
- `editTodo`
- `clearCompleted`

The provider also saves the todo list to `localStorage` with `useEffect`, so todos remain after a refresh.

Components such as `TodoForm` and `TodoList` access this shared data directly with `useContext`:

```tsx
const context = useContext(TodoContext);

if (!context) {
  return null;
}

const { addTodo } = context;
```

`TodoForm` can call `addTodo` without receiving that function from `App` as a prop. `TodoList` can access the same todo data without `App` forwarding it.

### FilterContext

`src/context/FilterContext.tsx` stores the current filter:

```tsx
const { filter, setFilter } = useContext(FilterContext);
```

`TodoFilter` updates the selected filter, and `TodoList` reads the filter to decide which todos to display. These components communicate through context instead of passing `filter` and `setFilter` through `App`.

### ThemeContext

`src/context/ThemeContext.tsx` stores the current theme and exposes `toggleTheme`:

```tsx
const { theme, toggleTheme } = useContext(ThemeContext);
```

`ThemeToggle` uses the context to change the theme. The theme state can be used by the application without passing theme-related props through the component tree.

## Why `useContext` Instead of Props?

Props are useful when a parent passes data directly to a child. For example:

```tsx
<TodoList todos={todos} />
```

With prop drilling, every component between the data owner and `TodoList` would need to receive and forward `todos`, even if those components do not use the data themselves.

With Context API, the provider makes the value available to all descendant components. A component reads the value where it needs it:

```tsx
const context = useContext(TodoContext);

if (!context) {
  return null;
}

const { todos } = context;
```

This keeps components focused on their own responsibilities and makes shared application state easier to access. The context still needs to be provided higher in the component tree, which is why the providers wrap `App` in `main.tsx`.

## Project Structure

```text
src/
├── components/
│   ├── ThemeToggle.tsx
│   ├── TodoFilter.tsx
│   ├── TodoForm.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
├── context/
│   ├── FilterContext.tsx
│   ├── ThemeContext.tsx
│   └── TodoContext.tsx
├── types/
│   └── types.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Technologies

- React 19
- TypeScript
- Vite
- React Context API and `useContext`
- Tailwind CSS

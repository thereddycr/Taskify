import { createContext, useContext } from "react";
import { Todo } from "../modal";

export const AppContext = createContext<Todo[] | []>([]);

// Check if the 'todos' array is empty. If it is, log a message to the console; otherwise, return the 'todos' array.
export function TodoContext() {
  const todos = useContext(AppContext);
  if (todos && todos.length === 0) {
    console.log("Todo context is empty or AppContext is not initialized"); 
    return []; // Returning an empty array when the condition is true
    // throw new Error("Todo context is empty or AppContext is not initialized");
  }
  return todos;
}

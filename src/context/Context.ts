import { createContext, useContext } from "react";
import { Todo } from "../modal";

export const Context = createContext<Todo[] | []>([]);

export function TodoContext() {
  const todos = useContext(Context);

  if (todos && todos.length === 0) {
    console.log("Todo context is empty or AppContext is not initialized");
    return [];
  }
  return todos;
}

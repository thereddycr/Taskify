import { createContext, useContext, Dispatch } from "react";
import { Todo } from "../modal";
import { Actions } from "./Reducers";

interface ContextProps {
  state: Todo[];
  dispatch: Dispatch<Actions>;
}

export const TodoContext = createContext<ContextProps | undefined>(undefined);

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    console.log("useTodoContext must be used within a TodoContextProvider");
    throw new Error("useTodoContext must be used within a TodoContextProvider");
  }
  return context;
}

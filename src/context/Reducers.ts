import { Todo } from "../modal";

export type Actions =
  | { type: "ADD_TODO"; payload: string }
  | { type: "EDIT_TODO"; payload: EditTodo }
  | { type: "REMOVE_TODO"; payload: number }
  | { type: "DONE_TODO"; payload: number };

type EditTodo = {
  id: number;
  editTodo: string;
};

export const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.editTodo }
          : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "DONE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};

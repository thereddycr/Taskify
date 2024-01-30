import React from "react";
import SingleTodo from "./SingleTodo";
import { useTodoContext } from "../context/Context";
import "./styles.css";

const TodoList: React.FC = () => {
  const { state } = useTodoContext();

  return (
    <div className="todos">
      {state.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;

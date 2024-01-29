import React from "react";
import "./styles.css";
import { Todo } from "../modal";
import SingleTodo from "./SingleTodo";
import { TodoContext } from "../context/AppContext";

interface Props {
  // todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  //  todos,
    setTodos }) => {
  const todosData = TodoContext();
  console.log(todosData, "todosData");
  return (
    <div className="todos">
      {todosData.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          // todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;

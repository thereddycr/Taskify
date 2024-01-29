import React from "react";
import "./styles.css";
import { Todo } from "../modal";
import SingleTodo from "./SingleTodo";
import { TodoContext } from "../context/Context";
import { Actions } from "../context/Reducers";

interface Props {
  // todos: Todo[];
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  dispatch: React.Dispatch<Actions>;
}

const TodoList: React.FC<Props> = ({
  //  todos,
  // setTodos
  dispatch,
}) => {
  const todosData = TodoContext();
  console.log(todosData, "todosData");
  return (
    <div className="todos">
      {todosData.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          // todos={todos}
          // setTodos={setTodos}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default TodoList;

import React, { useState, useReducer } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Context } from "./context/Context";
import { TodoReducer } from "./context/Reducers";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  // const [todos, setTodos] = useState<Todo[]>([]);

  const [state, dispatch] = useReducer(TodoReducer, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); //to avoid refresh or rerender the browser
    if (todo) {
      // setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      dispatch({
        type: "ADD_TODO",
        payload: todo,
      });
      setTodo("");
    }
  };
  return (
    <div className="App">
      <Context.Provider
        //  value={todos}
        value={state}
      >
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          //  todos={todos}
          // setTodos={setTodos}
          dispatch={dispatch}
        />
      </Context.Provider>
    </div>
  );
};

export default App;

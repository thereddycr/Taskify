import React, { useState, useEffect, useReducer } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context/Context";
import { TodoReducer } from "./context/Reducers";
import "./App.css";

const App: React.FC = () => {
  const initialData = JSON.parse(localStorage.getItem("@userTodo") || "[]");
  const [state, dispatch] = useReducer(TodoReducer, initialData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("@userTodo", JSON.stringify(state));
  }, [state]);

  const handleClear = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.removeItem("@userTodo");
      dispatch({ type: "CLEAR_ALL" });
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <button className="heading" onClick={handleClear}>
          {isLoading ? "Clearing..." : "Taskify"}
          <span className="clearMessage">Clear Todos</span>
        </button>
        <InputField />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
};

export default App;

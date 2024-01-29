import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./modal";
import TodoList from "./components/TodoList";
import { AppContext } from "./context/AppContext";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); //to avoid refresh or rerender the browser
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <AppContext.Provider value={todos}>
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          //  todos={todos}
          setTodos={setTodos}
        />
      </AppContext.Provider>
    </div>
  );
};

export default App;

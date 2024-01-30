import React, { useRef, useState } from "react";
import { useTodoContext } from "../context/Context";
import "./styles.css";

const InputField: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useTodoContext();
  const [todo, setTodo] = useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); //to avoid refresh or rerender the browser
    if (todo) {
      dispatch({
        type: "ADD_TODO",
        payload: todo,
      });
      setTodo("");
    }
  };
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur(); // to shift the focus to blur after button is pressed
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;

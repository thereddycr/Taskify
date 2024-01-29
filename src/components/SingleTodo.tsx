import React, { useState, useEffect, useRef } from "react";
import { Todo } from "../modal";
import { CiEdit } from "react-icons/ci";
import { MdDelete, MdDone } from "react-icons/md";
import "./styles.css";
import { TodoContext } from "../context/Context";
import { Actions } from "../context/Reducers";

interface Props {
  todo: Todo;
  // todos: Todo[];
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  dispatch: React.Dispatch<Actions>;
}

const SingleTodo: React.FC<Props> = ({
  todo,
  // todos,
  // setTodos,
  dispatch,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const todosData = TodoContext();
  // console.log(todosData, "todosData");

  const handleDone = (id: number) => {
    // setTodos(
    //   todosData.map((todo) =>
    //     todo.id === id
    //       ? {
    //           ...todo,
    //           isDone: !todo.isDone,
    //         }
    //       : todo
    //   )
    // );
    dispatch({
      type: "DONE_TODO",
      payload: id,
    });
  };

  const handleDelete = (id: number) => {
    // setTodos(todosData.filter((todo) => todo.id !== id));
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    // setTodos(
    //   todosData.map((todo) =>
    //     todo.id === id ? { ...todo, todo: editTodo } : todo
    //   )
    // );
    dispatch({
      type: "EDIT_TODO",
      payload: { id, editTodo },
    });
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          type="input"
          placeholder="Enter a task"
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
              return;
            }
            setEdit(false);
          }}
        >
          <CiEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

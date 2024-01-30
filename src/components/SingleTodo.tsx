import React, { useState, useEffect, useRef } from "react";
import { Todo } from "../modal";
import { CiEdit } from "react-icons/ci";
import { MdDelete, MdDone } from "react-icons/md";
import { useTodoContext } from "../context/Context";
import "./styles.css";

interface Props {
  todo: Todo;
}

const SingleTodo: React.FC<Props> = ({ todo }) => {
  const { dispatch } = useTodoContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_TODO",
      payload: { id, editTodo },
    });
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    if (edit) {
      console.log("on edit mode cannot be called");
      return;
    }
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  const handleDone = (id: number) => {
    if (edit) {
      console.log("on edit mode cannot be called");
      return;
    }
    dispatch({
      type: "DONE_TODO",
      payload: id,
    });
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      key={todo.id}
      className="todos__single"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
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
        {!edit && (
          <>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <MdDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </>
        )}
      </div>
    </form>
  );
};

export default SingleTodo;

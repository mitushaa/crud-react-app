import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";

import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as TimesSolid } from "./times-solid.svg";

import { availableColors, capitalize } from "../filters/colors";

const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId);
};

// Destructure `props.id`, since we just need the ID value
const TodoListItem = ({ id }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  const todo = useSelector((state) => selectTodoById(state, id));
  const { text, completed, color } = todo;

  const dispatch = useDispatch();

  const handleCompletedChanged = () => {
    dispatch({ type: "todos/todoToggled", payload: todo.id });
  };

  const handleColorChanged = (e) => {
    const color = e.target.value;
    dispatch({
      type: "todos/colorSelected",
      payload: { todoId: todo.id, color }
    });
  };

  const onDelete = () => {
    dispatch({ type: "todos/todoDeleted", payload: todo.id });
  };

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
          <GradeOutlinedIcon />
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;

import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const [isActive, setActive, Active] = useState("false");

 
  const removetodo = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className={`list-group-item ${isActive ? "" : "remove"} `}>
              <TodoItem {...todo} key={todo.id} />
              <button  className="btn btn-danger" onClick={removetodo}>
                Sil
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;

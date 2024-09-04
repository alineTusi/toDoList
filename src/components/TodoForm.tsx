import React, { Dispatch, SetStateAction, useState } from "react";
import TodoService from "../todoService";
import TodoTypes from "../todo";
import "../css/TodoForm.css";

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = TodoService.addTodos(newTodoText);
      setTodos((prevTodo) => [...prevTodo, newTodo]);
      setNewTodoText("");
    }
  };

  // Correctly return the JSX
  return (
    <div className="inputForm">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus={true}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  );
};

export default TodoForm;

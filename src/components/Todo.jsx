import { FaRegTrashAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category"> ({todo.category})</p>
      </div>

      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
        <FaCalendarCheck />
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
        <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Todo;

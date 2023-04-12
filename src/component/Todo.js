import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, checkTodo } from "../todo";
import './Todo.css';

function Todo({ todo }) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheck = (e) => { //리스트 체크
    setChecked(!checked);
    dispatch(checkTodo(todo.id, e.target.checked));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(todo.id));  //리스트 삭제
  };

  return (
    <div className="list">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={(e) => handleCheck(e)}
      ></input>
      <Link to={`/${todo.id}`}>
        <p className={`${todo.checked ? 'checked' : 'text'}`}>{todo.text}</p>
      </Link>
      <button className="delete" onClick={handleDeleteClick}>x</button>
    </div>
  );
}

export default Todo;
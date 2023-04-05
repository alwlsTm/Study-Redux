import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../todo";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteTodo(todo.id));  //리스트 삭제
  };

  return (
    <li>
      <Link to={`/${todo.id}`}>{todo.text}</Link>
      <button onClick={handleDeleteClick}>X</button>
    </li>
  );
}

export default Todo;
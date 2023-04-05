import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../todo";
import Todo from "../component/Todo";
import moment from "moment/moment";

function Home() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo); //전체 리스트 가져오기
  const today = moment().format('YYYY-MM-DD');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));  //리스트 추가
    setText("");
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <p>{today}</p>
      <form onSubmit={handleAddClick}>
        <input
          type="text"
          value={text}
          onChange={onChange}>
        </input>
        <button>+</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default Home;
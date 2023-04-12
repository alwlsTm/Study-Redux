import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../todo";
import Todo from "../component/Todo";
import moment from "moment/moment";
import './Home.css';

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
    if (!text) return;
    dispatch(addTodo(text));  //리스트 추가
    setText("");
  };

  return (
    <div className="container">
      <h1 className="title">TO DO LIST</h1>
      <div className="date-container">
        <p className="date">{today}</p>
      </div>
      <form onSubmit={handleAddClick}>
        <input
          type="text"
          value={text}
          placeholder="오늘의 할 일을 입력해 주세요!"
          onChange={onChange}>
        </input>
        <button className="add">+</button>
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
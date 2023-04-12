import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import './Detail.css';

function getTime(id) {
  const time = moment(id).format('HH시 mm분');
  return time;
}

function Detail() {
  const { id } = useParams();

  const todo = useSelector((state) => //선택한 리스트 찾기
    state.todo.find((t) => t.id === parseInt(id))
  );

  return (
    <div className="detail-container">
      <h3>{todo?.text}</h3>
      <p>작성 시간: {getTime(todo?.id)}</p>
    </div>
  );
}

export default Detail;
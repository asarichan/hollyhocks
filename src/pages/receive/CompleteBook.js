import "../../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const name = useSelector((state) => state.name); // Redux ストアから名前を取得
  const date = useSelector((state) => state.date);

  return (
    <div>
      <div className="App-ContentTitle">
        <p>取引が成立しました</p>
      </div>
      <div className="App-confirm">
        <p>本のタイトル：</p>
        <p>日時：{date}</p>
        <p>場所：</p>
        <p>名前：{name}</p>
      </div>
      <div className="Home">
        <Link to="/">ホームに戻る</Link>
      </div>
    </div>
  );
}

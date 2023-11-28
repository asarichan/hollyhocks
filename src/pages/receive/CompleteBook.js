import "../../App.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div className="App-ContentTitle">
        <p>取引が成立しました</p>
      </div>
      <div className="App-confirm">
        <p>日時</p>
        <p>場所</p>
        <p>名前</p>
      </div>
      <Link to="/">ホームに戻る</Link>
    </div>
  );
}

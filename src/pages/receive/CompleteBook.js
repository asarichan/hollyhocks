import "../../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const dummyData = {
  title: "独習　JAVA",
  place: "体育館入り口",
};

export default function App() {
  const name = useSelector((state) => state.name); // Redux ストアから名前を取得
  const date = useSelector((state) => state.date);

  return (
    <div>
      <div className="App-ContentTitle">取引が成立しました</div>

      <div className="App-confirm">
        <p className="h1-black">＜購入情報＞</p>
        <p className="h1-black">あなたの名前：{name}</p>
        <p className="h1-black">本のタイトル：{dummyData.title}</p>
        <p className="h1-black">日時：{date}</p>
        <p className="h1-black">場所：{dummyData.place}</p>
      </div>
      <div>
        <Link to="/">ホームに戻る</Link>
      </div>
    </div>
  );
}

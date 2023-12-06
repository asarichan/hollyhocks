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
        <p className="h1-black">
          あなたの名前：<span className="h1-black-sub">{name}</span>
        </p>
        <p className="h1-black">
          本のタイトル：<span className="h1-black-sub">{dummyData.title}</span>
        </p>
        <p className="h1-black">
          日時：<span className="h1-black-sub">{date}</span>
        </p>
        <p className="h1-black">
          場所：<span className="h1-black-sub">{dummyData.place}</span>
        </p>
      </div>
      <div>
        <Link to="/">
          <p className="home">ホームに戻る</p>
        </Link>
      </div>
    </div>
  );
}

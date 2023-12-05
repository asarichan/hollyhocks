import "../../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const dummyData = {
  tag: "プログラミングJAVA I",
  place: "体育館入り口",
};

function Complete() {
  const exhibitName = useSelector((state) => state.exhibitName);
  const exhibitBookName = useSelector((state) => state.exhibitBookName);

  return (
    <div>
      <div>
        <div className="App-ContentTitle">出品しました</div>

        <div className="App-confirm">
          <p className="h1-black">＜出品情報＞</p>
          <p className="h1-black">あなたの名前：{exhibitName}</p>
          <p className="h1-black">本のタイトル：{exhibitBookName}</p>
          <p className="h1-black">科目タグ：{dummyData.tag}</p>
          <p className="h1-black">場所：{dummyData.place}</p>
        </div>
        <Link to="/">
          <p>ホームに戻る</p>
        </Link>
      </div>
    </div>
  );
}

export default Complete;

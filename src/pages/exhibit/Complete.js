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
          <p className="h1-black">
            あなたの名前：
            <span className="h1-black-sub">{exhibitName}</span>
          </p>
          <p className="h1-black">
            本のタイトル：
            <span className="h1-black-sub">{exhibitBookName}</span>
          </p>
          <p className="h1-black">
            科目タグ：
            <span className="h1-black-sub">{dummyData.tag}</span>
          </p>
          <p className="h1-black">
            場所：
            <span className="h1-black-sub">{dummyData.place}</span>
          </p>
        </div>
        <Link to="/">
          <p className="home">ホームに戻る</p>
        </Link>
      </div>
    </div>
  );
}

export default Complete;

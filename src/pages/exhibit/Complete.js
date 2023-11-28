import "../../App.css";
import { Link } from "react-router-dom";

function Complete() {
  return (
    <div>
      <div>
        <div className="App-ContentTitle">出品しました</div>
        <Link to="/">
          <p>ホームに戻る</p>
        </Link>
      </div>
    </div>
  );
}

export default Complete;

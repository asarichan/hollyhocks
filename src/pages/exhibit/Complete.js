import "../../App.css";
import { Link } from "react-router-dom";

function Complete() {
  return (
    <div>
      <header>
        <p>出品しました</p>
        <Link to="/">
          <p>ホームに戻る</p>
        </Link>
      </header>
    </div>
  );
}

export default Complete;

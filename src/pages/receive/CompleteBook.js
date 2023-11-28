import "../../App.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App-content">
      <div className="ua">
        <p>取引が成立しました</p>
        <Link to="/">元のページに戻る</Link>
      </div>
    </div>
  );
}

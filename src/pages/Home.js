import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-title">
        Artem
        <header className="App-subtitle">
          -教科書をリサイクルできるWebアプリ-
        </header>
      </header>

      <main className="App-header">
        <h1> Artem </h1>
        <div className="space">教科書を</div>

        <Link to="exhibit" className="text">
          <p>欲しい学生にあげる</p>
        </Link>

        <Link to="search" className="text">
          <p>先輩からもらう</p>
        </Link>
      </main>
    </div>
  );
}

export default Home;

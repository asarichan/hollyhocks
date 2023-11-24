import "./App.css";
import { Routes, Route ,Link} from "react-router-dom"
import ExhibitBook from "./ExhibitBook"
import ReceiveBook from "./ReceiveBook"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="exibit" element={ <ExhibitBook/> } />
        <Route path="receive" element={ <ReceiveBook/> } /> 
      </Routes>
      <header className="App-title">
        Artem
        <header className="App-subtitle">
          -教科書をリサイクルできるWebアプリ-
        </header>
      </header>

      <header className="App-header">
        <h1> Artem </h1>
        <div className="space">教科書を</div>

        <Link to="receive" className="text">
          <p>欲しい学生にあげる</p>
        </Link>

        <a className="text" href="https://wed.company/">
          <p>先輩からもらう</p>
        </a>

        <a className="text" href="https://wed.company/">
          <p>もらわれたか確認する</p>
        </a>
      </header>
    </div>
  );
}

export default App;

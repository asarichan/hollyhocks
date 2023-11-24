import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ExhibitBook from "./ExhibitBook";
import ReceiveBook from "./ReceiveBook";
import DecideData from "./DecideDate";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exhibit" element={<ExhibitBook />} />
        <Route path="receive" element={<ReceiveBook />} />
        <Route path="add" element={<DecideData />} />
      </Routes>
    </div>
  );
}

export default App;

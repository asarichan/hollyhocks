import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ExhibitBook from "./ExhibitBook";
import ReceiveBook from "./ReceiveBook";
import DecideData from "./DecideDate";
import Hold from "./hold";
import Search from "./SearchBook";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exhibit" element={<ExhibitBook />} />
        <Route path="receive" element={<ReceiveBook />} />
        <Route path="add" element={<DecideData />} />
        <Route path="search" element={<Search />} />
        <Route path="hold" element={<Hold />} />
      </Routes>
    </div>
  );
}

export default App;

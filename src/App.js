import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ExhibitBook from "./pages/ExhibitBook";
import ReceiveBook from "./pages/ReceiveBook";
import DecideData from "./pages/receive/DecideDate";
import CompleteBook from "./pages/receive/CompleteBook";
import Complete from "./pages/exhibit/Complete";

import Search from "./SearchBook";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exhibit" element={<ExhibitBook />} />
        <Route path="receive" element={<ReceiveBook />} />
        <Route path="receive/decide" element={<DecideData />} />
        <Route path="receive/complete" element={<CompleteBook />} />
        <Route path="exhibit/complete" element={<Complete />} />

        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

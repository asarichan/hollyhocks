import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ExhibitBook from "./pages/ExhibitBook";
import ReceiveBook from "./pages/ReceiveBook";
import CompleteBook from "./pages/receive/CompleteBook";
import Complete from "./pages/exhibit/Complete";
import Example from "./Example";
import Search from "./pages/SearchBook";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="exhibit" element={<ExhibitBook />} />
        <Route path="search/receive" element={<ReceiveBook />} />
        <Route path="receive/complete" element={<CompleteBook />} />
        <Route path="exhibit/complete" element={<Complete />} />

        <Route path="example" element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;

//検索画面

import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [searchResult, setSearchResult] = useState(null);
  const reserchButton = () => {
    setSearchResult("何も出品されていないそうです");
  };
  return (
    <div className="App">
      <header>
        <input type="text" />
        <button onClick={reserchButton}>検索</button>
      </header>
      {searchResult !== null && (
        <div className="in">
          <h2>{searchResult}</h2>
        </div>
      )}
    </div>
  );
}

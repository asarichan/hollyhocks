//検索画面

import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [searchResult, setSearchResult] = useState(null);
  const reserchButton = () => {
    setSearchResult("何も出品されていないそうです");
  };

  const navigate = useNavigate();
  const BackPage = () => {
    navigate("/"); //前のページのパス(検索画面)
  };

  return (
    <div>
      <div className="App-ContentTitle">本を検索する</div>

      <button className="Home" type="button" onClick={BackPage}>
        戻る
      </button>

      <main className="App-search">
        欲しい本の科目を入力してください（例：線形代数、JAVA）
        <input type="text" />
        <button className="btn_02" onClick={reserchButton}>
          検索
        </button>
      </main>
      {searchResult !== null && (
        <div className="in">
          <h2>{searchResult}</h2>
        </div>
      )}
    </div>
  );
}

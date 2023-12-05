//検索画面

import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const dummyData = [
  {
    title: "線形代数 I",
    subject: "数学",
    author: "東日本",
    image:
      "https://www.meirinkanshoten.com/html/upload/save_image/0423122118_60823d2e6b1e4.jpg",
  },
  {
    title: "線形代数 I",
    author: "user2",
    image:
      "https://www.meirinkanshoten.com/html/upload/save_image/0423122118_60823d2e6b1e4.jpg",
  },
  {
    title: "Java",
    subject: "プログラミングJAVA I",
    author: "東日本",
    image: "https://m.media-amazon.com/images/I/71HaWNbej9L._SL1304_.jpg",
  },
  // ダミーデータ
];

export default function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);

  const handleSearch = () => {
    if (searchKeyword.trim() === "") {
      setEmptyInput(true);
      setNoResults(false);
      setSearchResult([]);
    } else {
      setEmptyInput(false);
      const filteredData = dummyData.filter(
        (item) =>
          // 一部一致
          // item.title.toLowerCase().includes(searchKeyword.toLowerCase()),
          // 全一致
          item.title.toLowerCase() === searchKeyword.toLowerCase() ||
          (item.subject &&
            item.subject.toLowerCase() === searchKeyword.toLowerCase()),
      );

      if (filteredData.length === 0) {
        setNoResults(true);
      } else {
        setSearchResult(filteredData);
        setNoResults(false);
      }
    }
  };

  const navigate = useNavigate();
  const BackPage = () => {
    navigate("/"); //前のページのパス(検索画面)
  };

  return (
    <div>
      <div className="App-ContentTitle">本を検索する</div>

      <button className="Home" type="button" onClick={BackPage}>
        ←ホームに戻る
      </button>

      <main className="App-search">
        欲しい本の科目を入力してください（例：線形代数 I、プログラミングJAVA I）
        <p>※シラバスに表記してある科目名を入力してください</p>
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button className="btn_02" onClick={handleSearch}>
          検索
        </button>
      </main>

      {emptyInput && (
        <div className="in">
          <p>検索キーワードを入力してください</p>
        </div>
      )}

      {noResults && (
        <div className="in">
          <p>まだ出品されていません</p>
        </div>
      )}

      {searchResult.length > 0 && (
        <div className="in">
          <h2>検索結果</h2>
          <ul className="search-list">
            {searchResult.map((item, index) => (
              <li key={index} className="search-item">
                {item.title} - {item.author}
                <Link to="receive">
                  <img src={item.image} alt={item.title} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

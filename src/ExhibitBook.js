//出品画面

// import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <h2>教科書を出品する</h2>

      <div class="name">
        <h2>名前</h2>
        <input type="text" />
      </div>
      <h2>写真</h2>
      <img
        src="https://m.media-amazon.com/images/I/31pu-L3RKEL._SY445_SX342_.jpg"
        alt="教科書の写真"
      />
      <h2>場所</h2>
      <ul>
        <li>食堂前</li>
        <li>体育館入り口</li>
        <li>研究棟</li>
      </ul>
      <div class="subject">
        <h2>科目タグ</h2>
        <input type="text" />
      </div>
      <h2>本文</h2>
      <div class="main">
        <input type="text" />
        <button>出品する</button>
      </div>
    </div>
  );
}

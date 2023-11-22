import "./App.css";

const user = "東日本";
const pic = "写真";
const book = "独習Java 新版";
const place = "体育館入り口";
const tag = "JAVA";
const explain = "この本でJAVAの全てが理解できます";


function DecideDate() {
  alert("日付を決めますか？");
}

export default function ReceiveBook() {
  return (
    <div>
      <div className="App">
        <div>本をもらう</div>
      </div>

      <div className="App-ReceiveBook">
        <p>出品者：{user}</p>
        <p>本の画像：{pic}</p>
        <p>本の名前：{book}</p>
        <p>受取場所：{place}</p>
        <p>科目タグ：{tag}</p>
        <p>本の説明：{explain}</p>
      </div>

      <div className="btn_02">
        <button type = "button" onclick = {DecideDate}>日時を決める</button> {/* 動かない*/}
      </div>

  </div>

  );
}

import "./App.css";

const user = "東日本";
const pic = "写真";
const book = "独習Java 新版";
const place = "体育館入り口";
const tag = "JAVA";
const explain = "この本でJAVAの全てが理解できます";

function DecideDate() {
  if (window.confirm("日付を決めますか？")) {
    document.write("日付を決めるページに飛ぶ");
  }
}

export default function ReceiveBook() {
  return (
    <div>
      <div>
        <div className="App">
          <div>本をもらう</div>
        </div>

        <div className="App-content">
          <p>出品者：{user}</p>
          <p>本の画像：{pic}</p>
          <p>本の名前：{book}</p>
          <p>受取場所：{place}</p>
          <p>科目タグ：{tag}</p>
          <p>本の説明：{explain}</p>
        </div>
      </div>
      <button className="btn_02" type="button" onClick={DecideDate}>
        日時を決める
      </button>
    </div>
  );
}

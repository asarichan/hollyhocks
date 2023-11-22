import "./App.css";

const user = "東日本";
const book = "独習Java 新版";
const place = "体育館入り口";
const tag = "JAVA";

/*
function YearMonthDay() {
 
}
*/

let today, year, month, begin, end;
today = new Date();

year = today.getFullYear();
month = today.getMonth() + 1;
begin = today.getDate();
end = today.getDate() + 7;

function ConfirmTransaction() {
  if (window.confirm("取引を確定させますか？")) {
    document.write("取引が成立しましたページに飛ぶ");
  } else {
  }
}

export default function DecideRecieve() {
  const handleButtonClick = () => {
    const inputDate = document.getElementById("dateInput").value;
    const currentDate = new Date(inputDate);

    // 最小日付と最大日付の設定（例として、2023年1月1日から2024年1月1日）
    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 7);

    if (currentDate < minDate || currentDate > maxDate) {
      alert("正しい日付を選択してください。");
    } else {
      if (window.confirm("この日付でよろしいですね?")) {
        ConfirmTransaction();
      } else {
        alert("もう一度決めなおしてください");
      }
    }
  };

  return (
    <div>
      <div className="App">
        <div className="App-ContentTitle">日時を決める</div>
      </div>

      <div className="App-content">
        <p>出品者の名前：{user}</p>
        <p>本の名前：{book}</p>
        <p>受取場所：{place}</p>
        <p>科目タグ：{tag}</p>
      </div>

      <p>
        <div>
          <label htmlFor="dateInput">日付を選択してください:</label>
          <input type="date" id="dateInput" />

          <button className="btn_02" type="button" onClick={handleButtonClick}>
            取引を確定する
          </button>
        </div>
      </p>
    </div>
  );
}

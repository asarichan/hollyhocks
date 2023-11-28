import "../../App.css";
import { useNavigate } from "react-router-dom";

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


export default function DecideRecieve() {
  const navigate = useNavigate();

  const ConfirmTransaction = () => {
    if (window.confirm("取引を確定させますか？")) {
      // document.write("取引が成立しましたページに飛ぶ");
      navigate("/receive/complete");
    } else {
      return;
    }
  };

  const handleButtonClick = () => {
    const inputDate = document.getElementById("dateInput").value;
    const currentDate = new Date(inputDate);

    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 7);

    if (!inputDate) {
      alert("日付が設定されていません！");
      return;
    }

    if (currentDate < minDate || currentDate > maxDate) {
      alert("正しい日付を選択してください！");
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

      <div>
        <p>＜取引内容確認＞</p>
      </div>

      <table className="form-table">
        <tbody>
          <tr>
            <th>氏名</th>
            <td>{user}</td>
          </tr>

          <tr>
            <th>本の名前</th>
            <td>{book}</td>
          </tr>

          <tr>
            <th>受取場所</th>
            <td>{place}</td>
          </tr>

          <tr>
            <th>科目タグ</th>
            <td>{tag}</td>
          </tr>
        </tbody>
      </table>

      {/* <p>要素の中に<p>は入れ子にできないので消しました。見た目が少し変わってしまったので調整お願いします */}
      <div>
        <div className="h1-black">
          <label htmlFor="dateInput">日付を選択してください</label>
        </div>
        {year}年{month}月{begin}日～{year}年{month}月{end}まで有効です
        <div className="h1-black">
          <p>
            <input type="date" id="dateInput" />
          </p>
        </div>
        <button className="btn_02" type="button" onClick={handleButtonClick}>
          取引を確定する
        </button>
      </div>
    </div>
  );
}

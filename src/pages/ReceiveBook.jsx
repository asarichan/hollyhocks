import "../App.css";
import "../App.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const user = "東日本";
const pic = "写真";
const book = "独習Java 新版";
const place = "体育館入り口";
const tag = "JAVA";
const explain = "この本でJAVAの全てが理解できます";

let today, beginyear, beginmonth, begin, twoWeekLater, endyear, endmonth, end;
today = new Date();
twoWeekLater = new Date(today);
twoWeekLater.setDate(twoWeekLater.getDate() + 14);

beginyear = today.getFullYear();
beginmonth = today.getMonth() + 1;
begin = today.getDate();
endyear = twoWeekLater.getFullYear();
endmonth = twoWeekLater.getMonth() + 1;
end = twoWeekLater.getDate();

export default function ReceiveBook() {
  const navigate = useNavigate();

  const BackPage = () => {
    if (
      window.confirm("前のページに戻りますか？記入されたデータは消去されます")
    ) {
      navigate("/"); //前のページのパス(検索画面)
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const inputDate = document.getElementById("dateInput").value;
    const currentDate = new Date(inputDate);

    // const minDate = new Date();
    // const maxDate = new Date(twoWeekLater);

    if (!inputDate) {
      alert("日付が設定されていません！");
      return;
    }

    if (currentDate < today || currentDate > twoWeekLater) {
      alert("正しい日付を選択してください！");
    } else {
      if (window.confirm("この日付で取引を確定しますか?")) {
        navigate("/receive/complete");
      } else {
        alert("もう一度決めなおしてください");
      }
    }
  };

  return (
    <div>
      <div className="App">
        <div className="App-ContentTitle">
          <div>本をもらう</div>
        </div>
      </div>

      <button className="Home" type="button" onClick={BackPage}>
        戻る
      </button>

      <table className="form-table">
        <tbody>
          <tr>
            <th>氏名</th>
            <td>{user}</td>
          </tr>

          <tr>
            <th>本の写真</th>
            <td>{pic}</td>
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

          <tr>
            <th>本の説明</th>
            <td>{explain}</td>
          </tr>
        </tbody>
      </table>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p>あなたの名前を入力してください</p>
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>※名前を入力してください</span>}

        {/* <p>要素の中に<p>は入れ子にできないので消しました。見た目が少し変わってしまったので調整お願いします */}
        <div>
          <div className="h1-black">
            <label htmlFor="dateInput">受け取る日付を選択してください</label>
          </div>
          {beginyear}年{beginmonth}月{begin}日～{endyear}年{endmonth}月{end}
          日まで有効です
          <div className="h1-black">
            <p>
              <input type="date" id="dateInput" />
            </p>
          </div>
          <button className="btn_02" type="submit">
            取引を確定する
          </button>
        </div>
      </form>
    </div>
  );
}

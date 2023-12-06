import "../App.css";
import "../App.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../Action";
import { setDate } from "../Action";

const user = "東日本";
const pic = "https://m.media-amazon.com/images/I/71HaWNbej9L._SL1304_.jpg";
const book = "新版　Java";
const place = "体育館入り口";
const tag = "プログラミングJAVA I";
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
  const message = `受取日時\n${beginyear}年${beginmonth}月${begin}日～${endyear}年${endmonth}月${end}日まで有効です\n`;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    name: "",
    date: "",
  }); // フォームの入力値を保持するステート

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    }); // 入力値を更新
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const BackPage = () => {
    if (
      window.confirm("前のページに戻りますか？記入されたデータは消去されます")
    ) {
      navigate("/search"); //前のページのパス(検索画面)
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
        dispatch(setName(inputValue.name));
        dispatch(setDate(inputValue.date));
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
        ←戻る
      </button>

      <p className="h1-black">出品情報の確認</p>
      <table className="form-table">
        <tbody>
          <tr>
            <th>氏名</th>
            <td>{user}</td>
          </tr>

          <tr>
            <th>本の写真</th>
            <td className="sample">
              {" "}
              <img src={pic} />
            </td>
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

      <p className="h1-black">受取者の情報を記入してください</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="form-table">
          <tbody>
            <tr>
              <th>
                名前 <span className="require">(必須)</span>
              </th>
              <td>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  value={inputValue.name}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <span className="require">※名前を入力してください</span>
                )}
              </td>
            </tr>

            <tr>
              <th>
                <label htmlFor="dateInput">{message}</label>
                <span className="require">(必須)</span>
              </th>
              <td>
                <input
                  type="date"
                  id="dateInput"
                  name="date"
                  value={inputValue.date}
                  onChange={handleDateChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn_02" type="submit">
          取引を確定する
        </button>
      </form>
    </div>
  );
}

//出品画面

import "../App.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export default function ExhibitBook() {
  const navigate = useNavigate();

  const BackHome = () => {
    if (
      window.confirm("ホーム画面に戻りますか？記入されたデータは消去されます")
    ) {
      navigate("/");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (window.confirm("この内容で出品しますか？")) {
      console.log(data); //フォームのデータを取得
      navigate("/exhibit/complete"); // リダイレクト先のパスを指定
    }
  };

  // UUIDを生成する関数
  const generateUUID = () => {
    const uuid = uuidv4();
    console.log("Generated UUID:", uuid);
    return uuid;
  };

  // ボタンをクリックしたときにUUIDを生成するイベント
  const buttonClick = () => {
    const generatedUUID = generateUUID();
    // 生成されたUUIDを使って何かしらの処理を行う
  };

  return (
    <div>
      <div className="App-ContentTitle">
        <div>本を出品する</div>
      </div>

      <button className="Home" type="button" onClick={BackHome}>
        ホームに戻る
      </button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="form-table">
          <tbody>
            <tr>
              <th>名前 (必須)</th>
              <td>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && <span>※名前を入力してください</span>}
              </td>
            </tr>

            <tr>
              <th>本の写真</th>
              <td>
                <input
                  type="file"
                  name="sample"
                  accept="image/jpeg, image/png"
                />
              </td>
            </tr>

            <tr>
              <th>書籍名 (必須)</th>
              <td>
                <input
                  type="text"
                  name="bookname"
                  {...register("bookname", { required: true })}
                />
                {errors.bookname && <span>※教科書名を入力してください</span>}
              </td>
            </tr>

            <tr>
              <th>場所 (必須)</th>
              <td>
                <ul>
                  <li>
                    <input id="" type="checkbox" />
                    <label className="check-place">食堂前</label>
                  </li>
                  <li>
                    <input id="" type="checkbox" />
                    <label className="check-place">体育館入り口</label>
                  </li>
                  <li>
                    <input id="" type="checkbox" />
                    <label className="check-place">研究棟</label>
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <th>科目タグ (必須)</th>
              <td>
                <input
                  type="text"
                  name="subject"
                  {...register("subject", { required: true })}
                />
                {errors.subject && <span>※科目タグを入力してください</span>}
              </td>
            </tr>

            <tr>
              <th>本文</th>
              <td>
                <input className="main-sentence" type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <button className="btn_02" type="submit" onclick={buttonClick}>
          出品する
        </button>
      </form>
    </div>
  );
}

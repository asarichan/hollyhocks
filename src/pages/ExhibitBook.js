//出品画面

import "../App.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { exhibitSetName } from "../Action";
import { exhibitSetBookName } from "../Action";

export default function ExhibitBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    name: "",
    bookName: "",
  }); // フォームの入力値を保持するステート

  //出品者の名前のステート管理
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    }); // 入力値を更新
  };

  //本の名前のステート管理
  const handleBookNameChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

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
      dispatch(exhibitSetName(inputValue.name));
      dispatch(exhibitSetBookName(inputValue.bookname));

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

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleSelection = (e) => {
    const options = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setSelectedOptions([...selectedOptions, ...options]);
  };

  const removeOption = (optionToRemove) => {
    const updatedOptions = selectedOptions.filter(
      (option) => option !== optionToRemove,
    );
    setSelectedOptions(updatedOptions);
  };

  // シラバスから一部抜粋
  const ProgrammingOptions = [
    { value: "プログラミング入門", label: "プログラミング入門" },
    { value: "プログラミングC", label: "プログラミングC" },
    { value: "プログラミングJAVA I", label: "プログラミングJAVA I" },
  ];

  const ComputerScienceOptions = [
    {
      value: "アルゴリズムとデータ構造 I",
      label: "アルゴリズムとデータ構造 I",
    },
    { value: "離散系論", label: "離散系論" },
    { value: " 論理回路設計論", label: " 論理回路設計論" },
  ];

  const ComputerNetworkOptions = [
    { value: "ネットワークセキュリティ", label: "ネットワークセキュリティ" },
    {
      value: "ネットワークプログラミング",
      label: "ネットワークプログラミング",
    },
  ];

  let optionsToShow = [];
  if (selectedGenre === "ProgrammingOptions") {
    optionsToShow = ProgrammingOptions;
  } else if (selectedGenre === "ComputerScienceOptions") {
    optionsToShow = ComputerScienceOptions;
  } else if (selectedGenre === "ComputerNetworkOptions") {
    optionsToShow = ComputerNetworkOptions;
  }

  return (
    <div>
      <div className="App-ContentTitle">
        <div>本を出品する</div>
      </div>

      <button className="Home" type="button" onClick={BackHome}>
        ←ホームに戻る
      </button>

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
              <th>
                書籍名 <span className="require">(必須)</span>
              </th>
              <td>
                <input
                  type="text"
                  name="bookname"
                  {...register("bookname", { required: true })}
                  value={inputValue.bookname}
                  onChange={handleBookNameChange}
                />
                {errors.bookname && (
                  <span className="require">※教科書名を入力してください</span>
                )}
              </td>
            </tr>

            <tr>
              <th>
                場所 <span className="require">(必須)</span>
              </th>
              <td>
                <ul>
                  <li>
                    <input id="" type="checkbox" name="Cafe" />
                    <label className="check-place">食堂前</label>
                  </li>
                  <li>
                    <input id="" type="checkbox" name="Gym" />
                    <label className="check-place">体育館入り口</label>
                  </li>
                  <li>
                    <input id="" type="checkbox" name="ResarchBench" />
                    <label className="check-place">研究棟ベンチ</label>
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <th>
                科目タグ <span className="require">(必須)</span>
              </th>
              <td>
                {/*
                <input
                  type="text"
                  name="subject"
                  {...register("subject", { required: true })}
                />
                {errors.subject && <span>※科目タグを入力してください</span>}{" "}
  */}
                <div className="tag-title">科目を選んでください :</div>
                <select onChange={handleGenreChange}>
                  <option value="">科目を選択してください</option>
                  <option value="ProgrammingOptions">
                    プログラミング関連科目
                  </option>
                  <option value="ComputerScienceOptions">
                    コンピュータ理工学基礎関連科目
                  </option>
                  <option value="ComputerNetworkOptions">
                    コンピュータ・ネットワーク関連科目
                  </option>
                </select>{" "}
                {selectedGenre && (
                  <div>
                    <div className="tag-title">科目タグを選んでください :</div>
                    <select multiple onChange={handleSelection}>
                      {optionsToShow.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {selectedOptions.length > 0 && (
                      <div>
                        <div className="tag-title">選択された選択肢 :</div>
                        <ul>
                          {selectedOptions.map((option) => (
                            <li key={option} className="tag-elements">
                              {option}

                              <button
                                type="button"
                                className="tag"
                                onClick={() => removeOption(option)}
                              >
                                削除する
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
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

        <button className="btn_02" type="submit" onClick={buttonClick}>
          出品する
        </button>
      </form>

      <div></div>
    </div>
  );
}

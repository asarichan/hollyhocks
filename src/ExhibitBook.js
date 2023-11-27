//出品画面

import "./App.css";
import { v4 as uuidv4 } from "uuid";

const uniqueId = uuidv4();
console.log("A unique ID:", uniqueId);

function CreateID() {}

export default function ExhibitBook() {
  return (
    <div>
      <div className="App-ContentTitle">
        <div>本を出品する</div>
      </div>

      <table class="form-table">
        <tbody>
          <tr>
            <th>名前</th>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <th>本の写真</th>
            <td>
              <input type="file" name="sample" accept="image/jpeg, image/png" />
            </td>
          </tr>

          <tr>
            <th>場所</th>
            <td>
              <ul>
                <li>
                  <input id="" type="checkbox" />
                  <label class="check-place">食堂前</label>
                </li>
                <li>
                  <input id="" type="checkbox" />
                  <label class="check-place">体育館入り口</label>
                </li>
                <li>
                  <input id="" type="checkbox" />
                  <label class="check-place">研究棟</label>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <th>科目タグ</th>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <th>本文</th>
            <td>
              <input class="main-sentence" type="text" />
            </td>
          </tr>
        </tbody>
      </table>

      <button className="btn_02" type="button">
        出品する
      </button>
    </div>
  );
}

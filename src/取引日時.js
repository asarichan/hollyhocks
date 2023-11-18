import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>取引日時を決めてください</h1>
      <div class="hage">
        <label>
          何日？:
          <input class="Date" placeholder="Select date" />
        </label>
      </div>
      <button class="example">購入する</button>
    </div>
  );
}

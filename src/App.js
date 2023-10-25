import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header text-wed">
        <img
          src={
            "https://4.bp.blogspot.com/-6nucQQvGF7M/WzC-BHQmAHI/AAAAAAABM90/mCILacrOAq8IqccOnH1U_umcAD56flJnQCLcBGAs/s800/yaruki_moeru_man.png"
          }
          className="App-logo"
          alt="logo"
        />
        <p className="text-asari">
          <code>WED</code>コミュニティにようこそ！
        </p>
        <a
          className="text-niku"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WED
        </a>
      </header>
    </div>
  );
}

export default App;

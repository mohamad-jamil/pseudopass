import "./App.css";
import PasswordDisplay from "./components/PasswordDisplay/PasswordDisplay";
import Switch from "./components/Switch/Switch";

function App() {
  return (
    <div className="container d-flex flex-column vh-100 justify-content-center align-items-center">
      <div className="title text-white mb-1">Password Generator</div>
      <div className="password-display mb-3">
        <PasswordDisplay />
      </div>
      <div className="row">
        <div className="col">
          <Switch label="Uppercase characters?" />
        </div>
        <div className="col">
          <Switch label="Numbers?" />
        </div>
        <div className="col">
          <Switch label="Symbols?" />
        </div>
      </div>
    </div>
  );
}

export default App;

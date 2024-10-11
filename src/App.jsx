import "./App.css";
import PasswordDisplay from "./components/PasswordDisplay/PasswordDisplay";
import Switch from "./components/Switch/Switch";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="container d-flex flex-column vh-100 justify-content-center align-items-center">
      <div className="title text-white mb-3">Password Generator</div>
      <div className="password-display mb-2">
        <PasswordDisplay />
      </div>
      <div className="row d-flex align-items-center">
        <div className="col">
          <Slider label="Length" />
        </div>
        <div className="col">
          <Switch label="Uppercase?" />
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

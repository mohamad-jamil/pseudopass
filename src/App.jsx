import "./App.css";
import PasswordDisplay from "./components/PasswordDisplay/PasswordDisplay";
import Switch from "./components/Switch/Switch";
import Slider from "./components/Slider/Slider";
import Button from "./components/Button/Button";

function App() {
  const handleRegenerate = () => {};

  return (
    <div className="container d-flex flex-column vh-100 justify-content-center align-items-center">
      <div className="title text-white mb-3">Password Generator</div>
      <div className="password-display mb-3">
        <PasswordDisplay />
      </div>
      <div className="row">
        <div className="col mb-1">
          <Slider label="Length" />
        </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
        <div className="col me-2 ms-4">
          <Switch label="Uppercase?" />
        </div>
        <div className="col">
          <Switch label="Numbers?" />
        </div>
        <div className="col mx-2">
          <Switch label="Symbols?" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button label="Generate" handleClick={handleRegenerate} />
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import PasswordDisplay from "./components/PasswordDisplay/PasswordDisplay";
import Switch from "./components/Switch/Switch";
import Slider from "./components/Slider/Slider";
import Button from "./components/Button/Button";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("Generate a password here!");

  const [length, setLength] = useState(8);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);

  const handleGeneratePassword = () => {
    console.log(
      `Generating password with length: ${length}, uppercase: ${hasUppercase}, numbers: ${hasNumbers}, symbols: ${hasSymbols}`
    );
  };

  return (
    <div className="container d-flex flex-column vh-100 justify-content-center align-items-center">
      <div className="title text-white mb-3">Password Generator</div>
      <div className="password-display mb-3">
        <PasswordDisplay value={password} />
      </div>
      <div className="row">
        <div className="col mb-1">
          <Slider
            label="Length"
            length={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
        <div className="col me-2 ms-4">
          <Switch
            label="Uppercase?"
            checked={hasUppercase}
            onChange={() => setHasUppercase((prev) => !prev)}
          />
        </div>
        <div className="col">
          <Switch
            label="Numbers?"
            checked={hasNumbers}
            onChange={() => setHasNumbers((prev) => !prev)}
          />
        </div>
        <div className="col mx-2">
          <Switch
            label="Symbols?"
            checked={hasSymbols}
            onChange={() => setHasSymbols((prev) => !prev)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button label="Generate" handleClick={handleGeneratePassword} />
        </div>
      </div>
    </div>
  );
}

export default App;

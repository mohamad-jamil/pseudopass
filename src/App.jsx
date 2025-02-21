import "./App.css";
import PasswordDisplay from "./components/PasswordDisplay/PasswordDisplay";
import Switch from "./components/Switch/Switch";
import Slider from "./components/Slider/Slider";
import Button from "./components/Button/Button";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

  const [length, setLength] = useState(8);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);

  const handleGeneratePassword = () => {
    setPassword("");

    const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    const pool =
      lowercaseCharacters +
      (hasUppercase ? uppercaseCharacters : "") +
      (hasNumbers ? numbers : "") +
      (hasSymbols ? symbols : "");

    for (let i = 0; i < length; i++) {
      setPassword(
        (prev) => prev + pool.charAt(Math.floor(Math.random() * pool.length))
      );
    }
  };

  return (
    <div className="container d-flex flex-column vh-100 justify-content-center align-items-center">
      <div className="h1 text-white mb-0">PseudoPass</div>
      <div className="text-white mb-4">
        <em>A pseudo-random password generator</em>
      </div>
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

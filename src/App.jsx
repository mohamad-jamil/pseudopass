import "./App.css";
import PasswordDisplay from "./components/PasswordDisplay/PasswordDisplay";

function App() {
  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <div className="title text-white mb-1">Password Generator</div>
      <div className="password-display">
        <PasswordDisplay />
      </div>
    </div>
  );
}

export default App;

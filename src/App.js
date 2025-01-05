import "./App.css";
import { Intro } from "./Components/Intro/Intro.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Intro />
      </header>
    </div>
  );
}

export default App;

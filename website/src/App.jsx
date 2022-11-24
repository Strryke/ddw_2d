import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/Navbar";
import BasicStatistics from "./components/Statistics";
import StatsGridWithImage from "./components/Features";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <BasicStatistics />
      <StatsGridWithImage />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Greeting from "./components/Greeting";
import Time from "./components/Time";

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);

  return (
    <div className="counter-page">
      <div className="content">
        <Greeting />
        <Buttons />
        <Time/>
      </div>
    </div>
  );
}

App.defaultProps = {
  name: "Designer",
};

export default App;

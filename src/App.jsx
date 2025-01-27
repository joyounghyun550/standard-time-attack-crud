import { useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const handleSubmit = () => {

  }

  return (
    <>
      <h1 className="title">파리올림픽</h1>
      <form onSubmit={handleSubmit} className="country-form">
        <label>
          국가이름
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}/>
        </label>
        <label>
          금메달
          <input type="number" value={gold} onChange={(e) => setGold(e.target.value)}/>
        </label>
        <label>
          은메달
          <input type="number" value={silver} onChange={(e) => setSilver(e.target.value)}/>
        </label>
        <label>
          동메달
          <input type="number" value={bronze} onChange={(e) => setBronze(e.target.value)}/>
        </label>
        <button type="">국가추가</button>
        <button>업데이트</button>
      </form>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [countries, setCountries] = useState([]);

  const resetForm = () => {
    setName("");
    setGold("");
    setSilver("");
    setBronze("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.nativeEvent.submitter.name === "add-btn") {
      if (countries.some((item) => item.name === name)) {
        alert("이미 존재하는 국가입니다.");
      } else {
        const newCountry = {
          name: name,
          gold: gold,
          silver: silver,
          bronze: bronze,
        };
        setCountries([...countries, newCountry]);
      }
    } else if (e.nativeEvent.submitter.name === "update-btn") {
      const updateCountry = countries.map((item) =>
        item.name === name
          ? { name: name, gold: gold, silver: silver, bronze: bronze }
          : item
      );
      setCountries(updateCountry);
    }
    resetForm();
  };

  const sortGold = () => {
    return countries.sort((a, b) => {
      parseInt(b.gold) - parseInt(a.gold);
    });
  };

  return (
    <>
      <h1 className="title">파리올림픽</h1>
      <form onSubmit={handleSubmit} className="country-form">
        <label>
          국가이름
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          금메달
          <input
            type="number"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
          />
        </label>
        <label>
          은메달
          <input
            type="number"
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
          />
        </label>
        <label>
          동메달
          <input
            type="number"
            value={bronze}
            onChange={(e) => setBronze(e.target.value)}
          />
        </label>
        <button type="submit" name="add-btn">
          국가추가
        </button>
        <button type="submit" name="update-btn">
          업데이트
        </button>
      </form>
      <ul>
        {sortGold().map((item) => {
          return (
            <li key={item.name}>
              {item.name} {item.gold} {item.silver} {item.bronze}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

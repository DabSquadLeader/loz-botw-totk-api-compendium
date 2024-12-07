import { useEffect, useState } from "react";
import "./App.css";
import Title from "./Title.js";
import Dropdown from "./Dropdown.js";
import Entry from "./Entry.js";
import Info from "./Info.js";
import Music from "./Music.js";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [selectedGame, setGame] = useState("empty");
  function fetchData(name) {
    let item = encodeURIComponent(name.toLowerCase());
    const game = encodeURIComponent(selectedGame.toLowerCase());
    if (selectedGame === "empty") {
      setData(null);
      return;
    }

    const url = `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${item}?game=${game}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        setData(r);
      })
      .catch((e) => {
        setData(`${e}`);
      });
  }

  return (
    <div className="App">
      <Title text="The Legend of Zelda Compendium" />
      <Dropdown selectedGame={selectedGame} setGame={setGame} />
      <Entry
        action={(name) => {
          setName(name);
          fetchData(name);
        }}
      />
      <Music />
      <Info name={name} data={data} />

      <div>
        <footer>
          <div>© COLIN BAJO-SMITH 2024</div>
          <div>
            <a href="https://codesandbox.io/p/sandbox/api-project-r6jj7y">
              Code
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

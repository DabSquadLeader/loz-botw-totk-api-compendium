import React from "react";

export default function Dropdown({ selectedGame, setGame }) {
  const handleChange = (event) => {
    setGame(event.target.value);
  };

  return (
    <div>
      <label htmlFor="game-select" id="chooseText">
        Choose a game:{" "}
      </label>
      <select id="game-select" value={selectedGame} onChange={handleChange}>
        <option value="empty"> </option>
        <option value="BotW">Breath of the Wild</option>
        <option value="TotK">Tears of the Kingdom</option>
      </select>
    </div>
  );
}

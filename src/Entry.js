import { useState } from "react";

export default function Entry({ action }) {
  const [content, setContent] = useState("");

  function submit(e) {
    e.preventDefault();
    action(content);
  }

  return (
    <form onSubmit={submit}>
      <input
        id="entryBox"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="enter item name"
      />
      <button type="submit" id="search">
        search
      </button>
    </form>
  );
}

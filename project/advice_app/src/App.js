import React, { useState } from 'react';

function App() {
  const [advice, setAdvice] = useState("버튼을 눌러주세요.");
  const [author, setAuthor] = useState("");

  const getAdvice = async () => {
    try {
      const res = await fetch("https://korean-advice-open-api.vercel.app/api/advice");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setAdvice(`"${data.message}"`);
      setAuthor(`- ${data.author} (${data.authorProfile})`);
    } catch (error) {
      setAdvice("명언 불러오기에 실패했습니다.");
      setAuthor("");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>🎲 명언 자판기</h1>
      <p>{advice}</p>
      <p style={{ fontStyle: "italic", color: "#666", marginTop: "-10px" }}>{author}</p>
      <button onClick={getAdvice}>명언 불러오기</button>
    </div>
  );
}

export default App;

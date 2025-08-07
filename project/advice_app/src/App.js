import React, { useState } from 'react';

function App() {
  const [advice, setAdvice] = useState("버튼을 눌러주세요.");

  const getAdvice = async () => {
    try {
      const res = await fetch("https://korean-advice-open-api.vercel.app/api/advice");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setAdvice(`"${data.message}"`);
    } catch (error) {
      setAdvice("명언을 불러오는 데 실패했습니다.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>🎲 명언 자판기</h1>
      <p>{advice}</p>
      <button onClick={getAdvice}>명언 불러오기</button>
    </div>
  );
}

export default App;

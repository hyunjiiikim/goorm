async function getAdvice() {
    const adviceEl = document.getElementById('advice');
    const authorEl = document.getElementById('author');
    adviceEl.textContent = '명언을 불러오는 중입니다...';
    authorEl.textContent = '';
    try {
        const res = await fetch('https://korean-advice-open-api.vercel.app/api/advice');
        if (!res.ok) throw new Error('네트워크 오류');
        const data = await res.json();
        adviceEl.textContent = `"${data.message}"`;
        authorEl.textContent = `- ${data.author} (${data.authorProfile})`;
    } catch (err) {
        adviceEl.textContent = '명언을 불러오지 못했습니다. 다시 시도해 주세요.';
        authorEl.textContent = '';
        console.error(err);
    }
}

window.onload = () => {
    document.getElementById('advice').textContent = '버튼을 눌러주세요.';
    document.getElementById('author').textContent = '';
};
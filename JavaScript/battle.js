var randomNum = Math.floor(Math.random() * 20 + 1)


document.getElementById('game').innerHTML = `
    <h2>Result</h2>
    <p class="result-number">${randomNum}</p>
    <button class="roll-btn" onclick="location.reload()">Roll Again</button>
`;
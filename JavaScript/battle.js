var player1Health = 100;
var player2Health = 100;

function roll() {
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomNum2 = Math.floor(Math.random() * 6) + 1;

    // Apply damage
    player2Health -= randomNum1;
    player1Health -= randomNum2;

    // Prevent negative health
    if (player1Health < 0) player1Health = 0;
    if (player2Health < 0) player2Health = 0;

    // Determine winner
    let resultText = "";
    if (player1Health === 0 && player2Health === 0) {
        resultText = "Draw";
    } else if (player1Health === 0) {
        resultText = "Player 2 Wins";
    } else if (player2Health === 0) {
        resultText = "Player 1 Wins";
    }

    document.getElementById('game').innerHTML = `
        <h2>Battle Simulator</h2>

        <p>Player 1 rolled: ${randomNum1}</p>
        <p>Player 2 rolled: ${randomNum2}</p>

        <p class="result-text">Player 1 Health: ${player1Health}</p>
        <p class="result-text">Player 2 Health: ${player2Health}</p>

        ${resultText ? `<h3>${resultText}</h3>` : ""}

        <button class="roll-btn" onclick="roll()">Roll</button>
    `;
}

// Run once on load
roll();
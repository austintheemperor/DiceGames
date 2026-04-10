var team1Score = 0
var team2Score = 0
var turn = "team1"
plays = []
game = true

function displayPBP() {
    if (!game) {
        document.getElementById('game').innerHTML = `
            <p class="result-text">${plays}</p>
            `;
}}

function roll() {
    if (game) {
        let result = ""
        var randomNum = Math.floor(Math.random() * 10 + 1)

        if (randomNum > 8) {
            if (turn == "team1") {
                team1Score += 3
                result = "Team 1 Scored a 3 pointer"
            } else if (turn == "team2") {
                team2Score += 3
                result = "Team 2 Scored a 3 pointer"
            }
        } else if (randomNum > 5) {
            if (turn == "team1") {
                team1Score += 2
                result = "Team 1 Scored 2 points"
            } else if (turn == "team2") {
                team2Score += 2
                result = "Team 2 Scored 2 points"
            }
        } else if (randomNum > 3) {
            if (turn == "team1") {
                result = "Team 1 missed"
            } else if (turn == "team2") {
                result = "Team 2 missed"
            }
        } else {
            if (turn == "team1") {
                turn = "team2"
                result = "Team 1 turned the ball over to team 2"
            } else if (turn == "team2") {
                turn = "team1"
                result = "Team 2 turned the ball over to team 1"
            }

        }
        plays.push(` ${result}`)

        let resultText = ""
        if (team1Score >= 30 && team2Score >= 30) {
        resultText = "Tie!"
        game = false
        } else if (team1Score >= 30) {
        resultText = "Team 1 Wins!"
        game = false
        } else if (team2Score >= 30) {
        resultText = "Team 2 Wins!"
        game = false
        }

        document.getElementById('game').innerHTML = `
            <h2>Basket Ball Simulator</h2>
            <p class="result-text">Team 1 Score: ${team1Score}</p>
            <p class="result-text">Team 2 Score: ${team2Score}</p>
            <p class="result-text">${result}</p>

            ${resultText ? `<h3>${resultText}</h3>` : ""}

            <button class="roll-btn" onclick="roll()">Roll</button>
            <button class="roll-btn" onclick="window.location.href='Index.html';">Home</button><br>
            <button class="roll-btn" onclick="displayPBP()">Display play by play</button>
        `;
}}
roll()

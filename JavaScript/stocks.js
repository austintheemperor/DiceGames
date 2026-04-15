var money = Number(prompt("What is your initial investment"))
const initial = money
plays = []
game = true

function displayPBP() {
    if (!game) {
        document.getElementById('game').innerHTML = `
            <p class="result-text">${plays}</p><br>
            <button class="roll-btn" onclick="window.location.href='Index.html';">Home</button><br>
        `;
    }
}

function roll() {
    if (game) {
        let result = ""
        var randomNum = Math.random()

        if (randomNum < 0.35) {
            // UP → 5% to 10%
            var gainPercent = (Math.random() * 5 + 5) / 100
            money += money * gainPercent
            result = `Stock went up (${(gainPercent * 100).toFixed(1)}%)`

        } else if (randomNum < 0.70) {
            // MID
            result = "No change"

        } else {
            // CRASH → 5% to 8%
            var lossPercent = (Math.random() * 3 + 5) / 100
            money -= money * lossPercent
            result = `Stock dipped (-${(lossPercent * 100).toFixed(1)}%)`
        }

        plays.push(` ${result} ($${money.toFixed(2)})`)

        let resultText = ""
        if (money <= 1) {
            resultText = "You went broke"
            game = false
        } else if (money >= (initial * 5)) {
            resultText = "You win!"
            game = false
        }

        document.getElementById('game').innerHTML = `
            <h2>Stock Simulator</h2>
            <p class="result-text">Money: $${money.toFixed(2)}</p>
            <p class="result-text">${result}</p>

            ${resultText ? `<h3>${resultText}</h3>` : ""}

            <button class="roll-btn" onclick="roll()">Roll</button>
            <button class="roll-btn" onclick="window.location.href='Index.html';">Home</button><br>
            <button class="roll-btn" onclick="displayPBP()">Display history</button>
        `;
    }
}

roll()

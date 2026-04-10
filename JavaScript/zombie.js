var health = 20
var stamina = 10
var kills = 0
var alive = true
var result = ""
var result2 = ""
var result3 = ""
var pbp = []
var damage = 0

function displayPBP() {
    if (!alive) {
        document.getElementById('game').innerHTML = `
            <p class="result-text">${pbp}</p>
            `;
}}

function roll() {
    result = ""
    result2 = ""
    result3 = ""

    if (alive) {

        var randomNum = Math.floor(Math.random() * 10 + 1)

        if (stamina > 10) {stamina = 10}
        if (stamina < 0) {stamina = 0}
        if (health > 20) {health = 20}
        if (stamina == 10 && health < 20) {health += 1; result = "you are full: +1 health"} // passive healing
        if (stamina < 1) {health -= 1; result = "you are starving: -1 health"} // starvation

        stamina -= 1

        if (randomNum > 9) {
            result2 = "you found a health potion: +3 health"
            health += 3
        } else if (randomNum > 5) {
            result2 = "you found an apple: +2 stamina"
            stamina += 2
        } else if (randomNum > 3) {
            result2 = "nothing happens"
        } else {
            damage = Math.floor(Math.random() * 6 + 1)
            result2 = `a zombie appears: -${damage} health, -1 stamina`
            health -= damage
            stamina -= 1
        }

        if (health < 1) {result3 = "you perish"; alive = false}
        if (result) {pbp.push(result)}
        if (result2) {pbp.push(result2)}
        if (result3) {pbp.push(result3)}

        document.getElementById('game').innerHTML = `
            <h2>Zombie Survival</h2>
            <p class="result-text">${result}</p>
            <p class="result-text">${result2}</p>
            <p class="result-text">${result3}</p>
            <p class="result-text">health: ${health}</p>
            <p class="result-text">stamina: ${stamina}</p>

            <button class="roll-btn" onclick="roll()">Roll</button>
            <button class="roll-btn" onclick="window.location.href='Index.html';">Home</button><br>
            <button class="roll-btn" onclick="displayPBP()">Display play by play</button>
        `;


}}
roll()

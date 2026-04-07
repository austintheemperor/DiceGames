var randomNum = Math.floor(Math.random() * 20 + 1)
var abilityModifier = Number(prompt("What is your Ability Modifier, only use 1 for positive one and -1 for negative one"))
var hit = ""
let result = randomNum + abilityModifier

if (result > 19) {
    hit = "Critical Success"
} else if (result > 14) {
    hit = "Strong Success"
} else if (result > 9) {
    hit = "Weak Success"
} else if (result > 1) {
    hit = "Miss"
} else {
    hit = "Critical Fail"
}


document.getElementById('game').innerHTML = `
    <h2>Result</h2>
    <p class="result-number">${result}</p>
    <p class="result-text">${hit}</p>
    <button class="roll-btn" onclick="location.reload()">Roll Again</button>
`;

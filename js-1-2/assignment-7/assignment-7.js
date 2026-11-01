const numberOfRolls = Number(prompt("How many times do you want to roll the dice?"));

let sum = 0;

for (let i = 0; i < numberOfRolls; i++) {
    const dice = Math.floor(Math.random() * 6) + 1;
    sum += dice;
}

document.getElementById("result").textContent = `Total: ${sum}`;

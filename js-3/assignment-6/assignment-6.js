function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const list = document.getElementById("result");

let dice;

do {
    dice = rollDice();

    const li = document.createElement("li");
    li.textContent = dice;
    list.appendChild(li);

} while (dice !== 6);

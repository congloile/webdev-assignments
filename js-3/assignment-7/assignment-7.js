function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt("How many sides does the dice have?"));
const list = document.getElementById("result");

if (Number.isInteger(sides) && sides > 0) {
    let dice;

    do {
        dice = rollDice(sides);

        const li = document.createElement("li");
        li.textContent = dice;
        list.appendChild(li);

    } while (dice !== sides);
}

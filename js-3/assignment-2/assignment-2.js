const count = Number(prompt("Enter the number of participants:"));

const names = [];

for (let i = 0; i < count; i++) {
    const name = prompt(`Enter participant ${i + 1} name:`);
    names.push(name);
}

names.sort((a, b) => a.localeCompare(b));

const list = document.getElementById("participants");

for (let i = 0; i < names.length; i++) {
    const li = document.createElement("li");
    li.textContent = names[i];
    list.appendChild(li);
}

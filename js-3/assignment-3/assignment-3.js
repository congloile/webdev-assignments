const dogs = [];

for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter dog ${i + 1} name:`);
    dogs.push(name);
}

dogs.sort((a, b) => b.localeCompare(a));

const list = document.getElementById("dogs");

for (let i = 0; i < dogs.length; i++) {
    const li = document.createElement("li");
    li.textContent = dogs[i];
    list.appendChild(li);
}

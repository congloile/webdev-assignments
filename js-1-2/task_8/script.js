const startYear = Number(prompt("Enter the start year:"));
const endYear = Number(prompt("Enter the end year:"));

const result = document.getElementById("result");

for (let year = startYear; year <= endYear; year++) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        const li = document.createElement("li");
        li.textContent = year;
        result.appendChild(li);
    }
}

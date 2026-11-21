const form = document.querySelector("#search-form");
const results = document.querySelector("#results");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const query = document.querySelector("#query").value.trim();

    // Clear previous results
    results.innerHTML = "";

    try {
        const response = await fetch(
            `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        // Display each joke
        for (const joke of data.result) {
            const article = document.createElement("article");
            const paragraph = document.createElement("p");

            paragraph.textContent = joke.value;

            article.appendChild(paragraph);
            results.appendChild(article);
        }

    } catch (error) {
        console.error("Error fetching jokes:", error);
    }
});

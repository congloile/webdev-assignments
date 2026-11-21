const form = document.querySelector("#search-form");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const query = document.querySelector("#query").value;

    try {
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error("Error fetching TV series:", error);
    }
});

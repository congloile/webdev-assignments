const form = document.querySelector("#search-form");
const results = document.querySelector("#results");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const query = document.querySelector("#query").value;

    // Clear old results
    results.innerHTML = "";

    try {
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        // Display every TV series
        for (const tvShow of data) {
            const show = tvShow.show;

            // Create article
            const article = document.createElement("article");

            // Show name
            const h2 = document.createElement("h2");
            h2.textContent = show.name;
            article.appendChild(h2);

            // Link to show details
            const link = document.createElement("a");
            link.href = show.url;
            link.textContent = "Show details";
            link.target = "_blank";
            article.appendChild(link);

            // Show image
            const image = document.createElement("img");
            image.src = show.image?.medium || "";
            image.alt = show.name;
            article.appendChild(image);

            // Show summary
            const summary = document.createElement("div");
            summary.innerHTML = show.summary || "";
            article.appendChild(summary);

            // Append article to results
            results.appendChild(article);
        }

    } catch (error) {
        console.error("Error fetching TV series:", error);
    }
});

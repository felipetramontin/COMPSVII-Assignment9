fetchGifButton = document.getElementById("fetch-gif-btn");
gifContainer = document.getElementById("gif-container");

endpoint = "https://api.giphy.com/v1/gifs/search?api_key=SrAdsK2thLzccU5oTUbR5tHXluhAgM1x&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

async function fetchGifs() {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const images = data.data;
        images.forEach(gif => {
            const imageUrl = gif.images.fixed_height.url;
            gifContainer.innerHTML += `<img src=${imageUrl} class="col-3 mb-3">`;
        });
    } catch (error) {
        console.error("Error fetching GIFs:", error);
    }
}

fetchGifButton.addEventListener("click", fetchGifs);
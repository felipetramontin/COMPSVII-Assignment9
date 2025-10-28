fetchGifButton = document.getElementById("fetch-gif-btn");
gifContainer = document.getElementById("gif-container");
searchInput = document.getElementById("search-input");

async function fetchGifs() {
    gifContainer.innerHTML = "";
    search = searchInput.value.trim();
    endpoint = `https://api.giphy.com/v1/gifs/search?api_key=SrAdsK2thLzccU5oTUbR5tHXluhAgM1x&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    try {
        response = await fetch(endpoint);
        data = await response.json();
        images = data.data;
        images.forEach(gif => {
            imageUrl = gif.images.fixed_height.url;
            gifContainer.innerHTML += `<img src=${imageUrl} class="col-3 mb-3">`;
        });
    } catch (error) {
        console.error("Error fetching GIFs:", error);
    }
}

fetchGifButton.addEventListener("click", fetchGifs);
document.addEventListener("DOMContentLoaded", () => {
    const favoritesList = document.getElementById("favorites-list");
    let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    // Function to display favorite movies
    function displayFavoriteMovies() {
        favoritesList.innerHTML = ""; // Clear existing content

        if (favoriteMovies.length === 0) {
            favoritesList.innerHTML = "<p>No favorite movies added yet.</p>";
            return;
        }

        favoriteMovies.forEach((movie) => {
            const movieCard = createFavoriteMovieCard(movie);
            favoritesList.appendChild(movieCard);
        });
    }

    // Function to create a favorite movie card
    function createFavoriteMovieCard(movie) {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        const img = document.createElement("img");
        img.src = `${movie.avatar}?id=${movie.id}`;
        img.alt = `${movie.name} poster`;
        card.appendChild(img);
        img.addEventListener("click", () => {
            localStorage.setItem("selectedMovie", JSON.stringify(movie));
            // Redirect to the details page
            window.location.href = "movie-details.html";
        });
    
        const title = document.createElement("h3");
        title.classList.add("movie-title");
        title.textContent = movie.name;
        card.appendChild(title);

        const releaseDate = document.createElement("p");
        releaseDate.classList.add("movie-info");
        releaseDate.textContent = `Release Date: ${new Date(movie.releaseDate).toLocaleDateString()}`;
        card.appendChild(releaseDate);

        const rating = document.createElement("p");
        rating.classList.add("movie-info");
        rating.textContent = `Rating: ${movie.rating}`;
        card.appendChild(rating);

        const genre = document.createElement("p");
        genre.classList.add("movie-info");
        genre.textContent = `Genre: ${movie.genre}`;
        card.appendChild(genre);

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-favorite-button");
        removeButton.textContent = "Remove from List";
        removeButton.addEventListener("click", () => {
            removeFromFavorites(movie.id);
        });
        card.appendChild(removeButton);

        return card;
    }

    // Function to remove a movie from favorites
    function removeFromFavorites(movieId) {
        favoriteMovies = favoriteMovies.filter((movie) => movie.id !== movieId);
        localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
        displayFavoriteMovies();
    }

    // Initial display of favorite movies
    displayFavoriteMovies();
});

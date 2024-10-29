document.addEventListener("DOMContentLoaded", () => {
  const movieDetailsContainer = document.getElementById("movie-details");

  // Retrieve the selected movie data from localStorage
  const movieData = localStorage.getItem("selectedMovie");

  if (movieData) {
    const movie = JSON.parse(movieData); // Parse the JSON string back into an object
    displayMovieDetails(movie); // Display the movie details
  } else {
    movieDetailsContainer.innerHTML = "<p>Movie details not found.</p>";
  }

  // Function to display movie details
  function displayMovieDetails(movie) {
    movieDetailsContainer.innerHTML = `
              <div class="movie-card">
                  <img src="${movie.avatar}" alt="${movie.name} poster">
                  <h3 class="movie-title">${movie.name}</h3>
                  <p class="movie-info"><strong>Release Date:</strong> ${movie.releaseDate}</p>
                  <p class="movie-info"><strong>Rating:</strong> ${movie.rating}</p>
                  <p class="movie-info"><strong>Genre:</strong> ${movie.genre}</p>
                  <p class="movie-description"><strong>Description:</strong> ${movie.description}</p>
                  <p class="movie-info"><strong>Actors:</strong> ${movie.actors}</p>
                  <p class="movie-info"><strong>Duration:</strong> ${movie.duration}</p>
              </div>
          `;
  }
});

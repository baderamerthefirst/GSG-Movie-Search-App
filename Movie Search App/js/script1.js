









document.addEventListener('DOMContentLoaded', () => {
    const moviesSection = document.querySelector('.movies-section');
    const searchInput = document.getElementById('search-bar');
    const categorySelect = document.querySelector('.category-select');
    const filterSelect = document.getElementById('filter-select');
    const searchButton = document.getElementById('search-button');
    const favoritesSlider = document.getElementById('favorites-slider');
    const openFavoritesBtn = document.getElementById('open-favorites-btn');
    const closeFavoritesBtn = document.getElementById('close-favorites-btn');
    const favoritesSection = document.querySelector('.favorites-section');
    // let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || []; // Load favorites from localStorage

    let moviesArray = [];
    let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || []; // Load favorites from localStorage

    // Fetch data from the API
    fetch('https://671616a033bc2bfe40bc5379.mockapi.io/movies/movie')
        .then(response => response.json())
        .then(data => {
            moviesArray = data; // Store the fetched data in an array
            displayMovies(moviesArray); // Initially display all movies
        })
        .catch(error => console.error('Error fetching movies:', error));

    // Event listener for the search button
    searchButton.addEventListener('click', () => {
        filterMovies();
    });

    // Function to filter and display movies based on input
    function filterMovies() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;
        const selectedFilter = filterSelect.value;

        let filteredMovies = moviesArray;

        // Filter by category (Movies or TV Shows)
        if (selectedCategory !== 'all') {
            filteredMovies = filteredMovies.filter(movie => {
                return selectedCategory === 'movies' ? movie.type === true : movie.type === false;
            });
        }

        // Apply the search filter based on selected criteria
        if (searchTerm) {
            filteredMovies = filteredMovies.filter(movie => {
                switch (selectedFilter) {
                    // case 'id':
                    //     return movie.id.includes(searchTerm);
                    case 'name':
                        return movie.name.toLowerCase().includes(searchTerm);
                    case 'description':
                        return movie.description.toLowerCase().includes(searchTerm);
                    case 'date':
                        return new Date(movie.releaseDate).toLocaleDateString().includes(searchTerm);
                    default:
                        return true;
                }
            });
        }

        displayMovies(filteredMovies);
    }

    // Function to display the movie cards
    function displayMovies(movies) {
        moviesSection.innerHTML = ''; // Clear the movie section
        movies.forEach(movie => {
            const movieCard = createMovieCard(movie);
            moviesSection.appendChild(movieCard);
        });
    }

    // Function to create movie card
    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        const img = document.createElement('img');
        // img.src =  `https://picsum.photos/id/${movie.id*10}/400/600`;
        img.src = `${movie.avatar}?id=${movie.id}`;

        img.alt = `${movie.name} poster`;
        card.appendChild(img);

        const title = document.createElement('h3');
        title.classList.add('movie-title');
        title.textContent = movie.name;
        card.appendChild(title);

        const releaseDate = document.createElement('p');
        releaseDate.classList.add('movie-info');
        releaseDate.textContent = `Release Date: ${new Date(movie.releaseDate).toLocaleDateString()}`;
        card.appendChild(releaseDate);

        const rating = document.createElement('p');
        rating.classList.add('movie-info');
        rating.textContent = `Rating: ${movie.rating}`;
        card.appendChild(rating);

        const genre = document.createElement('p');
        genre.classList.add('movie-info');
        genre.textContent = `Genre: ${movie.genre}`;
        card.appendChild(genre);

        const description = document.createElement('p');
        description.classList.add('movie-description');
        description.textContent = movie.description;
        card.appendChild(description);

        // Add the "Favorite" button
        const favoriteButton = document.createElement('button');
        favoriteButton.textContent = 'Add to Favorites';
        favoriteButton.classList.add('favorite-button');
        favoriteButton.addEventListener('click', () => {
            addToFavorites(movie);
        });
        card.appendChild(favoriteButton);

        return card;
    }

    function displayFavorites() {
        favoritesSection.innerHTML = ''; // Clear the favorites section
        favoriteMovies.forEach(movie => {
            const favoriteCard = createFavoriteCard(movie);
            favoritesSection.appendChild(favoriteCard);
        });
    }

    function addToFavorites(movie) {
        console.log(movie.id);
        // Check if the movie is already in the favorite list
        const isAlreadyFavorite = favoriteMovies.some(favMovie => favMovie.id === movie.id);
        if (!isAlreadyFavorite) {
            favoriteMovies.push(movie); // Add movie to the favorite list
            localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies)); // Save updated favorites to localStorage
            // alert(`${movie.name} has been added to your favorites!`);
            displayFavorites(); // Update favorites display

        } else {
            // alert(`${movie.name} is already in your favorites.`);
        }
    }
    function createFavoriteCard(movie) {
        const card = document.createElement('div');
        card.classList.add('favorite-card');

        const img = document.createElement('img');
        img.src = `${movie.avatar}?id=${movie.id}`;
        img.alt = `${movie.name} poster`;
        card.appendChild(img);

        const title = document.createElement('h3');
        title.classList.add('movie-title');
        title.textContent = movie.name;
        card.appendChild(title);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Favorites';
        removeButton.classList.add('remove-favorite-button');
        removeButton.addEventListener('click', () => {
            removeFromFavorites(movie.id);
        });
        card.appendChild(removeButton);

        return card;
    }

    openFavoritesBtn.addEventListener('click', () => {
        favoritesSlider.classList.add('show');
        openFavoritesBtn.style.display = 'none'; // Hide the open button when slider is visible
        closeFavoritesBtn.style.display = 'block'; // Hide the open button when slider is visible
        
        displayFavorites()
    });

    // Hide the slider when the "Hide Favorites" button is clicked
    closeFavoritesBtn.addEventListener('click', () => {
        favoritesSlider.classList.remove('show');
        openFavoritesBtn.style.display = 'block'; // Show the open button again
        closeFavoritesBtn.style.display = 'none'; // Show the open button again
    });

    // Function to display favorite movies
    function displayFavorites() {
        favoritesSection.innerHTML = ''; // Clear the favorites section
        favoriteMovies.forEach(movie => {
            const favoriteCard = createFavoriteCard(movie);
            favoritesSection.appendChild(favoriteCard);
        });
    }

    // Function to create favorite card
    function createFavoriteCard(movie) {
        const card = document.createElement('div');
        card.classList.add('favorite-card');

        const img = document.createElement('img');
        img.src = `${movie.avatar}?id=${movie.id}`;
        img.alt = `${movie.name} poster`;
        card.appendChild(img);

        const title = document.createElement('h3');
        title.classList.add('movie-title');
        title.textContent = movie.name;
        card.appendChild(title);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Favorites';
        removeButton.classList.add('remove-favorite-button');
        removeButton.addEventListener('click', () => {
            removeFromFavorites(movie.id);
        });
        card.appendChild(removeButton);

        return card;
    }

    // Function to remove a movie from favorites
    function removeFromFavorites(movieId) {
        favoriteMovies = favoriteMovies.filter(movie => movie.id !== movieId); // Remove the movie
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies)); // Update localStorage
        displayFavorites(); // Update favorites display
        // alert(`Movie removed from favorites.`);
    }

    // Initial display of favorites on page load
    // displayFavorites();

});






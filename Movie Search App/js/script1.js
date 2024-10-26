document.addEventListener("DOMContentLoaded", () => {
  const moviesSection = document.querySelector(".movies-section");
  const searchInput = document.getElementById("search-bar");
  const categorySelect = document.querySelector(".category-select");
  const filterSelect = document.getElementById("filter-select");
  const searchButton = document.getElementById("search-button");
  const favoritesSlider = document.getElementById("favorites-slider");
  const openFavoritesBtn = document.getElementById("open-favorites-btn");
  const closeFavoritesBtn = document.getElementById("close-favorites-btn");
  const movieSelect = document.getElementById("movie-select");
  const showSelect = document.getElementById("show-select");

  const favoritesSection = document.querySelector(".favorites-section");
  // let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || []; // Load favorites from localStorage

  let moviesArray = [
    {
      id: "m001",
      name: "Saving Private Ryan",
      releaseDate: "1998",
      avatar: "images/saving-private-ryan.jpg",
      description:
        "A skilled thief is offered a chance to regain his old life as payment for a task considered to be impossible: inception, the implantation of another person's idea into a target's subconscious.",
      duration: "2h 28min",
      actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      type: true,
      rating: "8.6",
      genre: "Drama/War",
    },
    {
      id: "m002",
      name: "Dunkirk",
      releaseDate: "2017",
      avatar: "images/dunkirk.jpg",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      duration: "2h 22min",
      actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
      type: false,
      rating: "9.0",
      genre: "Drama/War",
    },
    {
      id: "m003",
      name: "Schindler’s List",
      releaseDate: "1993",
      avatar: "images/Schindler’s List.jpg",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      duration: "2h 32min",
      actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
      type: true,
      rating: "8.3",
      genre: "Drama/War",
    },
    {
      id: "m004",
      name: "1917",
      releaseDate: "2019",
      avatar: "images/1917.jpg",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      duration: "2h 34min",
      actors: "John Travolta, Uma Thurman, Samuel L. Jackson",
      type: false,
      rating: "8.3",
      genre: "Drama/War",
    },
    {
      id: "m005",
      name: "Black Hawk Down",
      releaseDate: "2001",
      avatar: "images/Black Hawk Down.jpeg",
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      duration: "2h 22min",
      actors: "Tom Hanks, Robin Wright, Gary Sinise",
      type: false,
      rating: "7.7",
      genre: "Drama/War",
    },
    {
      id: "m006",
      name: "The Thin Red Line",
      releaseDate: "1998",
      avatar: "images/the thid red line.jpeg",
      description:
        "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
      duration: "2h 16min",
      actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
      type: true,
      rating: "7.6",
      genre: "Drama/War",
    },
    {
      id: "m007",
      name: "Full Metal Jacket",
      releaseDate: "1987",
      avatar: "images/Full Metal Jacket.avif",
      description:
        "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
      duration: "2h 26min",
      actors: "Robert De Niro, Ray Liotta, Joe Pesci",
      type: false,
      rating: "8.3",
      genre: "Drama/War",
    },
    {
      id: "m008",
      name: "Platoon",
      releaseDate: "2014-11-07",
      avatar: "images/Platoon.jpg",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      duration: "2h 49min",
      actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
      type: true,
      rating: "8.1",
      genre: "Drama/War",
    },
    {
      id: "m025",
      name: "The Usual Suspects",
      releaseDate: "1995-08-16",
      avatar: "images/the usual suspects.jpg",
      description:
        "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
      duration: "1h 46min",
      actors: "Kevin Spacey, Gabriel Byrne, Chazz Palminteri",
      type: false,
      rating: "8.5",
      genre: "Drama/War",
    },
    {
      id: "m026",
      name: "The Pianist",
      releaseDate: "2002-12-04",
      avatar: "images/the_pianist.jpg",
      description:
        "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
      duration: "2h 30min",
      actors: "Adrien Brody, Thomas Kretschmann, Frank Finlay",
      type: false,
      rating: "8.5",
      genre: "Drama/War",
    },
    {
      id: "m027",
      name: "The Dark Knight Rises",
      releaseDate: "2012-07-20",
      avatar: "images/The-Dark-Knight-Rises.avif",
      description:
        "Eight years after the Joker's reign of anarchy, Batman must return to defend Gotham City against the enigmatic jewel thief Catwoman and the ruthless mercenary Bane.",
      duration: "2h 44min",
      actors: "Christian Bale, Tom Hardy, Anne Hathaway",
      type: true,
      rating: "8.4",
      genre: "Action",
    },
    {
      id: "m028",
      name: "Alien",
      releaseDate: "1979-05-25",
      avatar: "images/Alien.webp",
      description:
        "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      duration: "1h 57min",
      actors: "Sigourney Weaver, Tom Skerritt, John Hurt",
      type: true,
      rating: "8.4",
      genre: "Horror",
    },
    {
      id: "m029",
      name: "Back to the Future",
      releaseDate: "1985-07-03",
      avatar: "images/Back to the Future.webp",
      description:
        "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
      duration: "1h 56min",
      actors: "Michael J. Fox, Christopher Lloyd, Lea Thompson",
      type: true,
      rating: "8.5",
      genre: "Adventure",
    },
    {
      id: "m030",
      name: "The Prestige",
      releaseDate: "2006-10-20",
      avatar: "images/The Prestige.jpg",
      description:
        "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
      duration: "2h 10min",
      actors: "Christian Bale, Hugh Jackman, Scarlett Johansson",
      type: false,
      rating: "8.5",
      genre: "Drama",
    },
    {
      id: "m031",
      name: "Memento",
      releaseDate: "2000-09-05",
      avatar: "images/Memento.jpg",
      description:
        "A man with short-term memory loss attempts to track down his wife's murderer.",
      duration: "1h 53min",
      actors: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano",
      type: false,
      rating: "8.4",
      genre: "Mystery",
    },
    {
      id: "m032",
      name: "The Terminator",
      releaseDate: "1984-10-26",
      avatar: "images/The Terminator.jpg",
      description:
        "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman.",
      duration: "1h 47min",
      actors: "Arnold Schwarzenegger, Linda Hamilton, Michael Biehn",
      type: true,
      rating: "8.0",
      genre: "Sci-Fi",
    },
    {
      id: "m033",
      name: "Die Hard",
      releaseDate: "1988-07-20",
      avatar: "images/Die Hard.jpeg",
      description:
        "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
      duration: "2h 12min",
      actors: "Bruce Willis, Alan Rickman, Bonnie Bedelia",
      type: true,
      rating: "8.2",
      genre: "Action",
    },
    {
      id: "m034",
      name: "The Big Lebowski",
      releaseDate: "1998-03-06",
      avatar: "images/The Big Lebowski.jpg",
      description:
        "Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
      duration: "1h 57min",
      actors: "Jeff Bridges, John Goodman, Julianne Moore",
      type: false,
      rating: "8.1",
      genre: "Comedy",
    },
    {
      id: "m035",
      name: "Apocalypse Now",
      releaseDate: "1979-08-15",
      avatar: "images/Apocalypse Now.jpg",
      description:
        "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
      duration: "2h 27min",
      actors: "Martin Sheen, Marlon Brando, Robert Duvall",
      type: false,
      rating: "8.4",
      genre: "War",
    },
    {
      id: "m036",
      name: "Good Will Hunting",
      releaseDate: "1997-12-05",
      avatar: "images/Good Will Hunting.avif",
      description:
        "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
      duration: "2h 6min",
      actors: "Robin Williams, Matt Damon, Ben Affleck",
      type: false,
      rating: "8.3",
      genre: "Drama",
    },
    {
      id: "m037",
      name: "The Thing",
      releaseDate: "1982-06-25",
      avatar: "images/The Thing.avif",
      description:
        "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
      duration: "1h 49min",
      actors: "Kurt Russell, Wilford Brimley, Keith David",
      type: true,
      rating: "8.1",
      genre: "Horror",
    },
    {
      id: "m038",
      name: "Casino",
      releaseDate: "1995-11-22",
      avatar: "images/Casino.jpg",
      description:
        "A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive compete against each other over a gambling empire.",
      duration: "2h 58min",
      actors: "Robert De Niro, Sharon Stone, Joe Pesci",
      type: false,
      rating: "8.2",
      genre: "Crime",
    },
    {
      id: "m039",
      name: "The Sixth Sense",
      releaseDate: "1999-08-06",
      avatar: "images/The Sixth Sense.webp",
      description:
        "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
      duration: "1h 47min",
      actors: "Bruce Willis, Haley Joel Osment, Toni Collette",
      type: false,
      rating: "8.1",
      genre: "Thriller",
    },
    {
      id: "m040",
      name: "Blade Runner",
      releaseDate: "1982-06-25",
      avatar: "images/Blade Runner.jpg",
      description:
        "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
      duration: "1h 57min",
      actors: "Harrison Ford, Rutger Hauer, Sean Young",
      type: true,
      rating: "8.1",
      genre: "Sci-Fi",
    },
    {
      id: "m041",
      name: "The Bridge on the River Kwai",
      releaseDate: "1957-10-02",
      avatar: "images/The Bridge on the River Kwai.avif",
      description:
        "British POWs are forced to build a railway bridge across the river Kwai for their Japanese captors, not knowing that the allied forces are planning to destroy it.",
      duration: "2h 41min",
      actors: "William Holden, Alec Guinness, Jack Hawkins",
      type: false,
      rating: "8.2",
      genre: "War",
    },
  ];
  let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || []; // Load favorites from localStorage

  // Fetch data from the API
  // fetch("https://671616a033bc2bfe40bc5379.mockapi.io/movies/movie")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     moviesArray = data; // Store the fetched data in an array
  displayMovies(moviesArray); // Initially display all movies
  // })
  // .catch((error) => console.error("Error fetching movies:", error));

  // Event listener for the search button
  searchButton.addEventListener("click", () => {
    // console.log(1);
    filterMovies();
  });

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      filterMovies(); // Call the search function
    }
  });

  // Function to filter and display movies based on input
  function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    // const selectedCategory = categorySelect.value;
    // const selectedFilter = filterSelect.value;
    // console.log(searchTerm);
    let filteredMovies = moviesArray;

    // Filter by category (Movies or TV Shows)

    // Apply the search filter based on selected criteria
    if (searchTerm) {
      filteredMovies = filteredMovies.filter((movie) => {
        return (
          movie.id.toLowerCase().includes(searchTerm) ||
          movie.name.toLowerCase().includes(searchTerm) ||
          movie.actors.toLowerCase().includes(searchTerm) ||
          // movie.description.toLowerCase().includes(searchTerm) ||
          movie.releaseDate.toLowerCase().includes(searchTerm)
        );
      });
    }

    displayMovies(filteredMovies);
  }

  // movieSelect.addEventListener("click", () => {
  //   categoryFilter(false);
  //   // console.log(1234);
  //   // filterMovies();
  // });

  // showSelect.addEventListener("click", () => {
  //   categoryFilter(true);
  //   // console.log(123);
  //   // filterMovies();
  // });

  function categoryFilter(selectedCategory) {
    let filteredMovies = moviesArray;

    if (selectedCategory == false || selectedCategory == true) {
      filteredMovies = filteredMovies.filter((movie) => {
        return selectedCategory === movie.type;
      });
    }
    displayMovies(filteredMovies);
  }

  // Function to display the movie cards
  function displayMovies(movies) {
    moviesSection.innerHTML = ""; // Clear the movie section
    movies.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      moviesSection.appendChild(movieCard);
    });
  }

  // Function to create movie card
  function createMovieCard(movie) {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    const img = document.createElement("img");
    // img.src =  `https://picsum.photos/id/${movie.id*10}/400/400`;
    img.src = `${movie.avatar}?id=${movie.id}`;

    img.alt = `${movie.name} poster`;
    card.appendChild(img);

    const title = document.createElement("h3");
    title.classList.add("movie-title");
    title.textContent = movie.name;
    card.appendChild(title);

    const releaseDate = document.createElement("p");
    releaseDate.classList.add("movie-info");
    releaseDate.textContent = `Release Date: ${new Date(
      movie.releaseDate
    ).toLocaleDateString()}`;
    card.appendChild(releaseDate);

    const rating = document.createElement("p");
    rating.classList.add("movie-info");
    rating.textContent = `Rating: ${movie.rating}`;
    card.appendChild(rating);

    const genre = document.createElement("p");
    genre.classList.add("movie-info");
    genre.textContent = `Genre: ${movie.genre}`;
    card.appendChild(genre);

    // const description = document.createElement("p");
    // description.classList.add("movie-description");
    // description.textContent = movie.description;
    // card.appendChild(description);

    // Add the "Favorite" button
    const favoriteButton = document.createElement("button");
    favoriteButton.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    favoriteButton.classList.add("favorite-button");
    favoriteButton.addEventListener("click", () => {
      addToFavorites(movie);
    });
    card.appendChild(favoriteButton);

    return card;
  }

  function displayFavorites() {
    favoritesSection.innerHTML = ""; // Clear the favorites section
    favoriteMovies.forEach((movie) => {
      const favoriteCard = createFavoriteCard(movie);
      favoritesSection.appendChild(favoriteCard);
    });
  }

  function addToFavorites(movie) {
    // console.log(movie.id);
    // Check if the movie is already in the favorite list
    const isAlreadyFavorite = favoriteMovies.some(
      (favMovie) => favMovie.id === movie.id
    );
    if (!isAlreadyFavorite) {
      favoriteMovies.push(movie); // Add movie to the favorite list
      localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies)); // Save updated favorites to localStorage
      // alert(`${movie.name} has been added to your favorites!`);
      displayFavorites(); // Update favorites display
    } else {
      // alert(`${movie.name} is already in your favorites.`);
    }
  }
  function createFavoriteCard(movie) {
    const card = document.createElement("div");
    card.classList.add("favorite-card");

    const img = document.createElement("img");
    img.src = `${movie.avatar}?id=${movie.id}`;
    img.alt = `${movie.name} poster`;
    card.appendChild(img);

    const title = document.createElement("h3");
    title.classList.add("movie-title");
    title.textContent = movie.name;
    card.appendChild(title);

    const removeButton = document.createElement("button");
    removeButton.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    removeButton.classList.add("remove-favorite-button");
    removeButton.addEventListener("click", () => {
      removeFromFavorites(movie.id);
    });
    card.appendChild(removeButton);

    return card;
  }

  openFavoritesBtn.addEventListener("click", () => {
    favoritesSlider.classList.add("show");
    openFavoritesBtn.style.display = "none"; // Hide the open button when slider is visible
    closeFavoritesBtn.style.display = "block"; // Hide the open button when slider is visible

    displayFavorites();
  });

  // Hide the slider when the "Hide Favorites" button is clicked
  closeFavoritesBtn.addEventListener("click", () => {
    favoritesSlider.classList.remove("show");
    openFavoritesBtn.style.display = "block"; // Show the open button again
    closeFavoritesBtn.style.display = "none"; // Show the open button again
  });

  // Function to display favorite movies
  function displayFavorites() {
    favoritesSection.innerHTML = ""; // Clear the favorites section
    favoriteMovies.forEach((movie) => {
      const favoriteCard = createFavoriteCard(movie);
      favoritesSection.appendChild(favoriteCard);
    });
  }

  // Function to create favorite card
  function createFavoriteCard(movie) {
    const card = document.createElement("div");
    card.classList.add("favorite-card");

    const img = document.createElement("img");
    img.src = `${movie.avatar}?id=${movie.id}`;
    img.alt = `${movie.name} poster`;
    card.appendChild(img);

    const title = document.createElement("h3");
    title.classList.add("movie-title");
    title.textContent = movie.name;
    card.appendChild(title);

    const removeButton = document.createElement("button");
    removeButton.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    removeButton.classList.add("remove-favorite-button");
    removeButton.addEventListener("click", () => {
      removeFromFavorites(movie.id);
    });
    card.appendChild(removeButton);

    return card;
  }
  function removeFromFavorites(movieId) {
    favoriteMovies = favoriteMovies.filter((movie) => movie.id !== movieId); // Remove the movie
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies)); // Update localStorage
    displayFavorites(); // Update favorites display
    // alert(`Movie removed from favorites.`);
  }
  // Initial display of favorites on page load
  // displayFavorites();
});

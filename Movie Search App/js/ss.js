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
      name: "Inception",
      releaseDate: "2010-07-16",
      avatar: "https://picsum.photos/id/11/400/400",
      description:
        "A skilled thief is offered a chance to regain his old life as payment for a task considered to be impossible: inception, the implantation of another person's idea into a target's subconscious.",
      duration: "2h 28min",
      actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      type: true,
      rating: "8.8",
      genre: "Sci-Fi",
    },
    {
      id: "m002",
      name: "The Shawshank Redemption",
      releaseDate: "1994-09-23",
      avatar: "https://picsum.photos/id/35/400/400",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      duration: "2h 22min",
      actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
      type: false,
      rating: "9.3",
      genre: "Drama",
    },
    {
      id: "m003",
      name: "The Dark Knight",
      releaseDate: "2008-07-18",
      avatar: "https://picsum.photos/id/41/400/400",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      duration: "2h 32min",
      actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
      type: true,
      rating: "9.0",
      genre: "Action",
    },
    {
      id: "m004",
      name: "Pulp Fiction",
      releaseDate: "1994-10-14",
      avatar: "https://picsum.photos/id/54/400/400",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      duration: "2h 34min",
      actors: "John Travolta, Uma Thurman, Samuel L. Jackson",
      type: false,
      rating: "8.9",
      genre: "Crime",
    },
    {
      id: "m005",
      name: "Forrest Gump",
      releaseDate: "1994-07-06",
      avatar: "https://picsum.photos/id/63/400/400",
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      duration: "2h 22min",
      actors: "Tom Hanks, Robin Wright, Gary Sinise",
      type: false,
      rating: "8.8",
      genre: "Drama",
    },
    {
      id: "m006",
      name: "The Matrix",
      releaseDate: "1999-03-31",
      avatar: "https://picsum.photos/id/75/400/400",
      description:
        "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
      duration: "2h 16min",
      actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
      type: true,
      rating: "8.7",
      genre: "Sci-Fi",
    },
    {
      id: "m007",
      name: "Goodfellas",
      releaseDate: "1990-09-19",
      avatar: "https://picsum.photos/id/82/400/400",
      description:
        "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
      duration: "2h 26min",
      actors: "Robert De Niro, Ray Liotta, Joe Pesci",
      type: false,
      rating: "8.7",
      genre: "Crime",
    },
    {
      id: "m008",
      name: "Interstellar",
      releaseDate: "2014-11-07",
      avatar: "https://picsum.photos/id/91/400/400",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      duration: "2h 49min",
      actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
      type: true,
      rating: "8.6",
      genre: "Sci-Fi",
    },
    {
      id: "m009",
      name: "Fight Club",
      releaseDate: "1999-10-15",
      avatar: "https://picsum.photos/id/103/400/400",
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much more.",
      duration: "2h 19min",
      actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
      type: false,
      rating: "8.8",
      genre: "Drama",
    },
    {
      id: "m010",
      name: "Avatar",
      releaseDate: "2009-12-18",
      avatar: "https://picsum.photos/id/112/400/400",
      description:
        "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      duration: "2h 42min",
      actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
      type: true,
      rating: "7.8",
      genre: "Sci-Fi",
    },
    {
      id: "m011",
      name: "The Godfather",
      releaseDate: "1972-03-24",
      avatar: "https://picsum.photos/id/123/400/400",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      duration: "2h 55min",
      actors: "Marlon Brando, Al Pacino, James Caan",
      type: false,
      rating: "9.2",
      genre: "Crime",
    },
    {
      id: "m012",
      name: "Jurassic Park",
      releaseDate: "1993-06-11",
      avatar: "https://picsum.photos/id/137/400/400",
      description:
        "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
      duration: "2h 7min",
      actors: "Sam Neill, Laura Dern, Jeff Goldblum",
      type: true,
      rating: "8.1",
      genre: "Adventure",
    },
    {
      id: "m013",
      name: "The Silence of the Lambs",
      releaseDate: "1991-02-14",
      avatar: "https://picsum.photos/id/142/400/400",
      description:
        "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
      duration: "1h 58min",
      actors: "Jodie Foster, Anthony Hopkins, Scott Glenn",
      type: false,
      rating: "8.6",
      genre: "Thriller",
    },
    {
      id: "m014",
      name: "Titanic",
      releaseDate: "1997-12-19",
      avatar: "https://picsum.photos/id/154/400/400",
      description:
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      duration: "3h 14min",
      actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
      type: false,
      rating: "7.8",
      genre: "Romance",
    },
    {
      id: "m015",
      name: "The Avengers",
      releaseDate: "2012-05-04",
      avatar: "https://picsum.photos/id/163/400/400",
      description:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      duration: "2h 23min",
      actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
      type: true,
      rating: "8.0",
      genre: "Action",
    },
    {
      id: "m016",
      name: "The Green Mile",
      releaseDate: "1999-12-10",
      avatar: "https://picsum.photos/id/171/400/400",
      description:
        "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      duration: "3h 9min",
      actors: "Tom Hanks, Michael Clarke Duncan, David Morse",
      type: false,
      rating: "8.6",
      genre: "Drama",
    },
    {
      id: "m017",
      name: "Iron Man",
      releaseDate: "2008-05-02",
      avatar: "https://picsum.photos/id/183/400/400",
      description:
        "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      duration: "2h 6min",
      actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
      type: true,
      rating: "7.9",
      genre: "Action",
    },
    {
      id: "m018",
      name: "Schindler's List",
      releaseDate: "1993-12-15",
      avatar: "https://picsum.photos/id/192/400/400",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      duration: "3h 15min",
      actors: "Liam Neeson, Ben Kingsley, Ralph Fiennes",
      type: false,
      rating: "8.9",
      genre: "Biography",
    },
    {
      id: "m019",
      name: "Gladiator",
      releaseDate: "2000-05-05",
      avatar: "https://picsum.photos/id/201/400/400",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      duration: "2h 35min",
      actors: "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
      type: true,
      rating: "8.5",
      genre: "Action",
    },
    {
      id: "m020",
      name: "The Departed",
      releaseDate: "2006-10-06",
      avatar: "https://picsum.photos/id/214/400/400",
      description:
        "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
      duration: "2h 31min",
      actors: "Leonardo DiCaprio, Matt Damon, Jack Nicholson",
      type: false,
      rating: "8.5",
      genre: "Crime",
    },
    {
      id: "m021",
      name: "The Lion King",
      releaseDate: "1994-06-24",
      avatar: "https://picsum.photos/id/223/400/400",
      description:
        "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      duration: "1h 28min",
      actors: "Matthew Broderick, Jeremy Irons, James Earl Jones",
      type: true,
      rating: "8.5",
      genre: "Animation",
    },
    {
      id: "m022",
      name: "Saving Private Ryan",
      releaseDate: "1998-07-24",
      avatar: "https://picsum.photos/id/235/400/400",
      description:
        "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
      duration: "2h 49min",
      actors: "Tom Hanks, Matt Damon, Tom Sizemore",
      type: false,
      rating: "8.6",
      genre: "War",
    },
    {
      id: "m023",
      name: "The Lord of the Rings: The Fellowship of the Ring",
      releaseDate: "2001-12-19",
      avatar: "https://picsum.photos/id/241/400/400",
      description:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      duration: "2h 58min",
      actors: "Elijah Wood, Ian McKellen, Orlando Bloom",
      type: true,
      rating: "8.8",
      genre: "Fantasy",
    },
    {
      id: "m024",
      name: "Star Wars: Episode IV - A New Hope",
      releaseDate: "1977-05-25",
      avatar: "https://picsum.photos/id/252/400/400",
      description:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station.",
      duration: "2h 1min",
      actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
      type: true,
      rating: "8.6",
      genre: "Sci-Fi",
    },
    {
      id: "m025",
      name: "The Usual Suspects",
      releaseDate: "1995-08-16",
      avatar: "https://picsum.photos/id/261/400/400",
      description:
        "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
      duration: "1h 46min",
      actors: "Kevin Spacey, Gabriel Byrne, Chazz Palminteri",
      type: false,
      rating: "8.5",
      genre: "Sci-Fi",
    },
    {
      id: "m026",
      name: "The Pianist",
      releaseDate: "2002-12-04",
      avatar: "https://picsum.photos/id/270/400/400",
      description:
        "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
      duration: "2h 30min",
      actors: "Adrien Brody, Thomas Kretschmann, Frank Finlay",
      type: false,
      rating: "8.5",
      genre: "Biography",
    },
    {
      id: "m027",
      name: "The Dark Knight Rises",
      releaseDate: "2012-07-20",
      avatar: "https://picsum.photos/id/281/400/400",
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
      avatar: "https://picsum.photos/id/290/400/400",
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
      avatar: "https://picsum.photos/id/301/400/400",
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
      avatar: "https://picsum.photos/id/312/400/400",
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
      avatar: "https://picsum.photos/id/321/400/400",
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
      avatar: "https://picsum.photos/id/330/400/400",
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
      avatar: "https://picsum.photos/id/341/400/400",
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
      avatar: "https://picsum.photos/id/350/400/400",
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
      avatar: "https://picsum.photos/id/361/400/400",
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
      avatar: "https://picsum.photos/id/370/400/400",
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
      avatar: "https://picsum.photos/id/381/400/400",
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
      avatar: "https://picsum.photos/id/390/400/400",
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
      avatar: "https://picsum.photos/id/401/400/400",
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
      avatar: "https://picsum.photos/id/410/400/400",
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
      avatar: "https://picsum.photos/id/421/400/400",
      description:
        "British POWs are forced to build a railway bridge across the river Kwai for their Japanese captors, not knowing that the allied forces are planning to destroy it.",
      duration: "2h 41min",
      actors: "William Holden, Alec Guinness, Jack Hawkins",
      type: false,
      rating: "8.2",
      genre: "War",
    },
    {
      id: "m042",
      name: "Indiana Jones and the Raiders of the Lost Ark",
      releaseDate: "1981-06-12",
      avatar: "https://picsum.photos/id/430/400/400",
      description:
        "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.",
      duration: "1h 55min",
      actors: "Harrison Ford, Karen Allen, Paul Freeman",
      type: true,
      rating: "8.4",
      genre: "Adventure",
    },
    {
      id: "m043",
      name: "The Breakfast Club",
      releaseDate: "1985-02-15",
      avatar: "https://picsum.photos/id/441/400/400",
      description:
        "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
      duration: "1h 37min",
      actors: "Emilio Estevez, Judd Nelson, Molly Ringwald",
      type: false,
      rating: "7.9",
      genre: "Drama",
    },
    {
      id: "m044",
      name: "Aliens",
      releaseDate: "1986-07-18",
      avatar: "https://picsum.photos/id/450/400/400",
      description:
        "Ellen Ripley is rescued by a deep salvage team after being in hypersleep for 57 years. The moon that the Nostromo visited has been colonized, but contact is lost. This time, colonial marines have impressive firepower, but will that be enough?",
      duration: "2h 17min",
      actors: "Sigourney Weaver, Michael Biehn, Carrie Henn",
      type: true,
      rating: "8.3",
      genre: "Action",
    },
    {
      id: "m045",
      name: "A Beautiful Mind",
      releaseDate: "2001-12-21",
      avatar: "https://picsum.photos/id/461/400/400",
      description:
        "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
      duration: "2h 15min",
      actors: "Russell Crowe, Ed Harris, Jennifer Connelly",
      type: false,
      rating: "8.2",
      genre: "Biography",
    },
    {
      id: "m046",
      name: "Heat",
      releaseDate: "1995-12-15",
      avatar: "https://picsum.photos/id/471/400/400",
      description:
        "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.",
      duration: "2h 50min",
      actors: "Al Pacino, Robert De Niro, Val Kilmer",
      type: false,
      rating: "8.2",
      genre: "Crime",
    },
    {
      id: "m047",
      name: "The Iron Giant",
      releaseDate: "1999-08-06",
      avatar: "https://picsum.photos/id/481/400/400",
      description:
        "A young boy befriends a giant robot from outer space that a government agent wants to destroy.",
      duration: "1h 26min",
      actors: "Eli Marienthal, Harry Connick Jr., Jennifer Aniston",
      type: true,
      rating: "8.1",
      genre: "Animation",
    },
    {
      id: "m048",
      name: "Reservoir Dogs",
      releaseDate: "1992-10-23",
      avatar: "https://picsum.photos/id/490/400/400",
      description:
        "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
      duration: "1h 39min",
      actors: "Harvey Keitel, Tim Roth, Michael Madsen",
      type: false,
      rating: "8.3",
      genre: "Crime",
    },
    {
      id: "m049",
      name: "The Princess Bride",
      releaseDate: "1987-09-25",
      avatar: "https://picsum.photos/id/501/400/400",
      description:
        "While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
      duration: "1h 38min",
      actors: "Cary Elwes, Mandy Patinkin, Robin Wright",
      type: true,
      rating: "8.1",
      genre: "Adventure",
    },
    {
      id: "m050",
      name: "Full Metal Jacket",
      releaseDate: "1987-07-10",
      avatar: "https://picsum.photos/id/510/400/400",
      description:
        "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
      duration: "1h 56min",
      actors: "Matthew Modine, R. Lee Ermey, Vincent D'Onofrio",
      type: false,
      rating: "8.3",
      genre: "Animation",
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
          movie.description.toLowerCase().includes(searchTerm) ||
          movie.releaseDate.toLowerCase().includes(searchTerm)
        );
      });
    }

    displayMovies(filteredMovies);
  }
  movieSelect.addEventListener("click", () => {
    categoryFilter(false);
    // console.log(1234);
    // filterMovies();
  });
  showSelect.addEventListener("click", () => {
    categoryFilter(true);
    // console.log(123);
    // filterMovies();
  });
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

    const description = document.createElement("p");
    description.classList.add("movie-description");
    description.textContent = movie.description;
    card.appendChild(description);

    // Add the "Favorite" button
    const favoriteButton = document.createElement("button");
    favoriteButton.textContent = "Add to Favorites";
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
    removeButton.textContent = "Remove from Favorites";
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
    removeButton.textContent = "Remove from Favorites";
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

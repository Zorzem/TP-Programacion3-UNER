// 1. Configuración Inicial

const movies = [
  {
    id: 1,
    title: "Titanic",
    year: 1997,
    director: "James Cameron",
    rating: 7.8,
    genre: "Romance / Drama",
  },
  {
    id: 2,
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    rating: 8.6,
    genre: "Ciencia ficción / Aventura",
  },
  {
    id: 3,
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    rating: 8.8,
    genre: "Drama / Comedia",
  },
  {
    id: 4,
    title: "The Lion King",
    year: 1994,
    director: "Roger Allers y Rob Minkoff",
    rating: 8.5,
    genre: "Animación / Aventura / Drama",
  },
  {
    id: 5,
    title: "The Avengers",
    year: 2012,
    director: "Joss Whedon",
    rating: 7.0,
    genre: "Acción / Ciencia ficción / Aventura",
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    rating: 9.3,
    genre: "Drama / Clasico / Aventura",
  },
];

console.log("------------------------------------------------------------");
// 2. Operaciones Básicas y Acceso
// 2.1 Longitud del array
console.log("Cantidad total de películas:", movies.length);

// 2.2 Acceso al nombre del segundo y cuarto elemento del array
console.log("Película en segundo lugar:", movies[1].title);
console.log("Película en cuarto lugar:", movies[3].title);


// 3. Recorrido del Array
//3.1 for of()
console.log("-Ejercicio 3.1-------------------------------------------------------");
for (const movie of movies) {
  console.log(movie.title,movie.rating);
}
console.log("-Ejercicio 3.2-------------------------------------------------------");
//3.2 forEach()
movies.forEach(function (movie) {
  console.log(`Pelicula: ${movie.title} y Puntuación: ${movie.rating} `);
});
console.log("------------------------------------------------------------");

// 4. Manipulación de Arrays
// 4.1 push()
movies.push(
  {
    id: 7,
    title: "Dunkirk",
    year: 2017,
    director: "Christopher Nolan",
    rating: 7.8,
    genre: "Belico / Drama",
  },
  {
    id: 8,
    title: "Oppenheimer",
    year: 2023,
    director: "Christopher Nolan",
    rating: 8.6,
    genre: "Drama, biográfico, thriller, histórico",
  }
);
console.log("Películas agregadas con push():", movies[movies.length - 2].title, "y", movies[movies.length - 1].title);

// 4.2 pop()
let eliminarConPop = movies.pop();
console.log("Película eliminada con pop():", eliminarConPop.title);

// 4.3 unshift()
movies.unshift({
  id: 0,
  title: "Back to the Future",
  year: 1985,
  director: "Robert Zemeckis",
  rating: 8.8,
  genre: "Ciencia ficción / Aventura",
});
console.log("Pelicula agregada al inicio con unshift():", movies[0].title);

// 4.4 shift()
eliminarConShift = movies.shift();
console.log("Película eliminada con shift():", eliminarConShift.title);
console.log(movies);
console.log("------------------------------------------------------------");

// 4.5 filter()
const topMovies = movies.filter((movie) => movie.rating >= 8);
console.log("Películas con alto puntaje:", topMovies);
console.log("------------------------------------------------------------");

// 4.6 map()
const movieTitles = movies.map((movie) => movie.title);
console.log("Títulos de películas:", movieTitles);
console.log("------------------------------------------------------------");

// 4.7 find()
const movieWithId3 = movies.find((movie) => movie.id === 3);
if (movieWithId3) {
  console.log("Película con id 3 encontrada:", movieWithId3.title);
} else {
  console.log("No existe una película con id 3");
}
console.log("------------------------------------------------------------");

// 4.8 sort()
const moviesOrderedByRatingDesc = [...movies].sort((a, b) => b.rating - a.rating);
console.log("Películas ordenadas por puntuación descendente:", moviesOrderedByRatingDesc);
console.log("------------------------------------------------------------");

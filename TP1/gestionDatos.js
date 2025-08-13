// 1. Configuración Inicial //

const movies = [
  {
    id: 1,
    title: "Titanic",
    year: 1997,
    director: "James Cameron",
    rating: 7.8,
    genre: "Romance / Drama"
  },
  {
    id: 2,
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    rating: 8.6,
    genre: "Ciencia ficción / Aventura"
  },
  {
    id: 3,
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    rating: 8.8,
    genre: "Drama / Comedia"
  },
  {
    id: 4,
    title: "The Lion King",
    year: 1994,
    director: "Roger Allers y Rob Minkoff",
    rating: 8.5,
    genre: "Animación / Aventura / Drama"
  },
  {
    id: 5,
    title: "The Avengers",
    year: 2012,
    director: "Joss Whedon",
    rating: 8.0,
    genre: "Acción / Ciencia ficción / Aventura"
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    rating: 9.3,
    genre: "Drama / Clasico / Aventura"
}
];

console.log("------------------------------------------------------------");
// 2. Operaciones Básicas y Acceso //
//Longitud del array
console.log("Cantidad total de películas:", movies.length);

//Acceso al nombre del segundo y cuarto elemento del array
console.log("Película en segundo lugar:", movies[1].title);
console.log("Película en cuarto lugar:", movies[3].title);

console.log("------------------------------------------------------------");
// 3. Recorrido del Array: //
//3.1 for of()
for (const movie of movies){
  console.log(`Pelicula: ${movie.title} y Puntuación: ${movie.rating} `);
}
console.log("------------------------------------------------------------");
//3.2 forEach() 
movies.forEach(function(movie){
  console.log(`Pelicula: ${movie.title} y Puntuación: ${movie.rating} `);
});
console.log("------------------------------------------------------------");

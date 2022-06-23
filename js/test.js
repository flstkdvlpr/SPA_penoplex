const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Один из просмотренных последних фильмов?", "");
const b = prompt("Один из просмотренных последних фильмов?", "");

personalMovieDB.movies.a = prompt("Как его оцените?", "");
personalMovieDB.movies.b = prompt("Как его оцените?", "");

console.log(personalMovieDB.movies);
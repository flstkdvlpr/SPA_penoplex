let numberOfFilms;

while (!(numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")) || numberOfFilms>10000) {
    alert('Введите правдоподобные данные!');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (10 < personalMovieDB.count < 30) {
    alert("Вы - классический зритель"); 
} else if (personalMovieDB.count > 30) {
    alert("Вы - киноман!"); 
} else {
    alert("Произошла ошибка!");
}

const a = prompt("Один из просмотренных последних фильмов?", "");
      b = prompt("Как его оцените?", "");
      c = prompt("Один из просмотренных последних фильмов?", "");
      d = prompt("Как его оцените?", "");

for (let i = 0; i < 2; i++){

}
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);
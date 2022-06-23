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


let a,b,c,d;

for (let i = 0; i < 1; i++){
    a = prompt("Один из просмотренных последних фильмов?", "");
    b = prompt("Как его оцените?", "");
        if (!a || !b) {
            alert("Что-то заполнено неверно!");
            continue;
        }
        for (let j = 0; j < 1; j++) {
            c = prompt("Один из просмотренных последних фильмов?", "");
            d = prompt("Как его оцените?", "");
        }

}
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);
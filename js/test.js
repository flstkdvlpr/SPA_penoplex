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

for (let i = 0; i < 2; i++){
    a = prompt("Один из просмотренных последних фильмов?", "");
    b = +prompt("Как его оцените?", "");

    if(a !=null && b!= null && !a.trim() && a.length > 50 && b > 100) {
        alert('Введите правдоподобные данные!');
        i--;
        continue;
    }

    personalMovieDB.movies[a] = b;

}
      


console.log(personalMovieDB.movies);
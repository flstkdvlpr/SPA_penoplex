let numberOfFilms;

function start(){
    while (!(numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")) || numberOfFilms>10000) {
        alert('Введите правдоподобные данные!');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



      
function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt("Один из просмотренных последних фильмов?", "");
              b = +prompt("Как его оцените?", "");
        if(a === null || b === null || !a.trim() || b === " " || a.length > 50 || b > 100) {
            alert('Введите правдоподобные данные!');
            i--;
            continue;
        }
        personalMovieDB.movies[a] = b;
    }
}

rememberMyFilms();

function detectPersonslLevel(){
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (10 < personalMovieDB.count < 30) {
        alert("Вы - классический зритель"); 
    } else if (personalMovieDB.count > 30) {
        alert("Вы - киноман!"); 
    } else {
        alert("Произошла ошибка!");
    }
}

detectPersonslLevel();

showMyDB(personalMovieDB.private);



function showMyDB (myDB){
    if (!myDB) {
        return console.log(personalMovieDB);
    }
}

let answer;

function writeYourGenres(){
    for (let i = 3; i < 3; i++){
        answer = prompt("Какой ваш любимы жанр", "");
        personalMovieDB.genres = answer;
    }
}






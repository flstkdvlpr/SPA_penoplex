'use strict';
//filter
const names = ['Anna', 'Geror', 'Ivan', 'Artem', 'Voldemar'];
const shortNames = names.filter(function(name){
    return name.length < 5;
})
console.log(shortNames);

//map
const people = ['ANNa', 'GeORg', 'IvaAn', 'Artem', 'Voldemar'];
const normPeople = people.map(item => item.toLowerCase());
console.log(normPeople);

// some/ever

const people2 = ['ANNa', 'GeORg', 1, 'Artem', 'Voldemar'];
const answer2 = people2.some(item => typeof(item) === 'number'); //если 1 из...
console.log(answer2);

const people3 = ['ANNa', 'GeORg', 1, 'Artem', 'Voldemar'];
const answer3 = people3.every(item => typeof(item) === 'number'); //если все из...
console.log(answer3);

// reduce

const numb = [1,3,4,5,6,7,8];
const res = numb.reduce((sum, current) => sum + current);
console.log(res);

const allNames = ['Anna', 'Geror', 'Ivan', 'Artem', 'Voldemar'];
const stringOfNames = allNames.reduce((names, data) => `${names}, ${data}`);
console.log(stringOfNames);

//Итого. Вытащить из объекта всех людей

const obj = {
    ivan: 'people',
    anna: 'people',
    dog: 'animal',
    oleg: 'people',
    cat: 'animal'
}

const newArr = Object.entries(obj)
.filter(item => item[1] === 'people')
.map(item => item[0])
.reduce((names, data) => `${names}, ${data}`);

console.log(newArr);
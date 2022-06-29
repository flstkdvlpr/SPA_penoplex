//Деструктуризация объектов

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Привет, я тест!');
    },
};
 
const {border, bg} = options.colors; // вытаскиваем  {width, height} из options.colors

console.log(border); // border: 'black',

options.makeTest();


//********************* */

function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});

console.log(result);


console.log([]+ 1 +2);
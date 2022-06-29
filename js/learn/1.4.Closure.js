//  Замыкание и лексическое окружение

/* let number = 5;
function logNumber(){
    console.log(number);
}
number = 6;
logNumber();
number = 8;
logNumber(); */

//************************

    function createCounter(){
    let counter = 0;

    const myFunction = function(){
        counter = counter + 1;
        return counter;
    };

    return myFunction;
}

const increment = createCounter();

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

//************************

function f(){
    console.log('SayHi');
}

console.log("a" > "b");


//******************* */

let a = 3;
function addTwo(x) {
let ret = x + 2;
return ret;
}
let b = addTwo(a);
console.log(b);
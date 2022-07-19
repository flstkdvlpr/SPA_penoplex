function count(num){
    return this*num;
}

const dubles = count.bind(2);

console.log(dubles(3));
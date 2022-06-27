// копирование объектов. Поверхностные копии

let arr = [1, 4, 6];
arr.forEach(function(item, i, arr) {
     console.log(`${i}: ${item} в массиве ${arr}`);
 });
 function sortNums(a,b){
     return a - b;
 }
 
console.log(arr.sort(sortNums));

function copyObj(obj){
    let newObj = {};
    let key;
    for (key in obj){
        newObj[key] = obj[key];
    }
    return newObj;
}

const ab = ['ar', 'gen', 'ver'],
      ba = ['bn', 'bh', 'ee'],
      ca = [...ab, ...ba, 'fr', 're'];

console.log(ca);

function log (a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const nums = [1, 3, 6];

log(...nums);
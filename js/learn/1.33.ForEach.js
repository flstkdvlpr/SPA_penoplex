const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

//*********

const arr2 = [1,2,3,4,5,6,7,8,9];
let arr3 = [];

arr2.forEach(function(item){
    arr3.push(item * 2);
});

console.log(arr3);


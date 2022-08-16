'use strict';

const shops = [
  {rise: 500},
  {oli: 300},
  {bread: 2}
];


const map = new Map();

//set
const budget = [3500, 4500, 50];
shops.forEach((shop, i) =>{ // тоже самое map.set(shops[0], 5000).set(shops[1], 250).set(shops[4], 100);
  map.set(shop, budget[i]);
});
console.log(map);

//get

console.log(map.get(shops[0]));

//map.has(), map.delete(key); map.clear();map.size.

//map.keys();

for (let shop in map.keys()){
  console.log(shop);
}



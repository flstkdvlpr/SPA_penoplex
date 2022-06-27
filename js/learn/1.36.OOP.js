// ООП

const solder = {
    helth: 300,
    weapon: 200,
    armor: 400
};

const vasya = {};

//vasya наследует все типы. DEPRICATED vasya.__proto__ = solder; 

Object.setPrototypeOf(vasya, solder);
console.log(Object.getPrototypeOf(vasya));

const artom = Object.create(solder);
console.log(artom.armor);
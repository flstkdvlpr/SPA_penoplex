console.log('click');

const people = {
    name: "John",
    tel: '+7925485552',
    parents: {
        mom: 'Olga',
        father: 'Andrew'
    }
};

JSON.stringify(people);
console.log(JSON.parse(JSON.stringify(people)));

const clonePeople = JSON.parse(JSON.stringify(people));
clonePeople.parents.mom = 'Lora';
console.log(clonePeople);
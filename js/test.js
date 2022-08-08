'use strict';

console.log('Запрос данных...');

const prom = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Подготовка данных...');
        const product = {name: "TV", price: "2000"};

        resolve(product);

    }, 3000);
});

prom.then((product)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            product.status = 'order';
            resolve(product);
            //reject();
        }, 2000);

    });
}).then(product =>{
    product.modify = true;
    return product;
}).then(product => {
    console.log(product);
}).catch(() => {
    console.log('Произошла ошибка');
}).finally(() =>{
    console.log('finally');
});

const time = time =>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}

//time(1000).then(() => console.log('1000 ms'));
//time(2000).then(() => console.log('2000 ms'));

Promise.all([time(1000), time(2000)]).then(() =>{
    console.log('Good')
}).catch(() =>{
    console.error('Jib,rf');
}).finally(() =>{

});
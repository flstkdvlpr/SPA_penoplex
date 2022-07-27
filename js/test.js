console.log('click');

const rests = function(a, b, ...rest){

    console.log(a, b, rest);
}

rests('fff', 3, 'teeed', true)
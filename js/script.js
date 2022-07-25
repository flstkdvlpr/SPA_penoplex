window.addEventListener('DOMContentLoaded', ()=>{

    const house = document.querySelector('.house'),
        card = document.querySelectorAll('.card');


    house.addEventListener('click', (e)=>{
        const target = e.target;
        if(target && target.dataset.item == 'roofpitched'){
            //hideAllItems();
            parent.document.location.href = "http://127.0.0.1:5500/index.html#catalog";
            console.log('click');
        }
    });


    function hideAllItems(){
        card.forEach(item =>{
            item.classList.add('hide');
        });
    }

    //hideAllItems();

    card.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == 'speclink'){
                item.childNodes[3].classList.remove('hide');
                console.log(item.childNodes[1].classList.add('hide'));
                console.log(item.childNodes[1]);
                console.log(item.childNodes[3]);
            }
        });
    }); 

    card.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == 'specendlink'){
                item.childNodes[1].classList.remove('hide');
                item.childNodes[3].classList.add('hide');
            }
        });
    }); 

});
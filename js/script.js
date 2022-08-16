window.addEventListener('DOMContentLoaded', ()=>{

    const house = document.querySelector('.house'),
        card = document.querySelectorAll('.card'),
        modal = document.querySelector('.modal'),
        cardOrders = document.querySelectorAll('.card-orders'),
        dataCircle = document.querySelectorAll('[data-circle]'),
        cardChar = document.querySelectorAll('.card-char-1');

        console.log(dataCircle[1].innerText);


        dataCircle.forEach(item =>{
            item.addEventListener('click', (e)=>{
                if(e.target){
                    hideAllItems();
                }
            })
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
                console.log(item.childNodes.childNodes);
                item.childNodes[3].classList.remove('hide');
                item.childNodes[1].classList.add('hide');

            }
        });
    }); 

    card.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == 'specendlink'){
                item.childNodes[1].classList.remove('hide');
                item.childNodes[3].classList.add('hide');
                console.log(item.childNodes[3]);
            }
        });
    });
    



/* 
    fetch('http://localhost:3000/offers')
    .then(data => data.json())
    .then(res => console.log(res)); */



    
  
});
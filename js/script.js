window.addEventListener('DOMContentLoaded', ()=>{

    const house = document.querySelector('.house'),
        card = document.querySelectorAll('.card'),
        buyBtn = document.querySelectorAll('[modal-buy]'),
        modal = document.querySelector('.modal'),
        cardOrders = document.querySelectorAll('.card-orders');

        console.log(modal);



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


    const inputRub = document.querySelector('#rub'),
          inputUsd = document.querySelector('#usd');

    inputRub.addEventListener('input', ()=>{
        const request = new XMLHttpRequest();
        request.open('GET', 'js/current.json'); //настройки для запроса GET/POST, URL, SYNC/ASYNC, login, pass
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8' );
        request.send();
        request.addEventListener('load', ()=>{ //readystatechange
            if(request.status == 200){
                const res = JSON.parse(request.response);
                inputUsd.value = (inputRub.value/res.current.usd).toFixed(2);
            } else {
                inputUsd.value = 'Что-то пошло не так';
            }
        });
    });

    buyBtn.forEach(item =>{
        item.addEventListener('click', ()=>{
            
            
        });
    });

});
window.addEventListener('DOMContentLoaded', ()=>{

    const house = document.querySelector('.house'),
        card = document.querySelectorAll('.card'),
        modal = document.querySelector('.modal'),
        cardOrders = document.querySelectorAll('.card-orders');


 /*    house.addEventListener('click', (e)=>{
        const target = e.target;
        if(target && target.dataset.item == 'roofpitched'){
            //hideAllItems();
            parent.document.location.href = "http://127.0.0.1:5500/index.html#catalog";
            console.log('click');
        }
    }); */


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

/*     inputRub.addEventListener('input', ()=>{
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
    }); */

    inputRub.addEventListener('input', ()=>{
        const request = new XMLHttpRequest();
        request.open('GET', 'js/price.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8' );
        request.send();
        request.addEventListener('load', ()=>{
            if(request.status == 200){
                const data = JSON.parse(request.response);
                console.log(data.offers[0].price);
            }
        })
    })

});
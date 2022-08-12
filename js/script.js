window.addEventListener('DOMContentLoaded', ()=>{

    const house = document.querySelector('.house'),
        card = document.querySelectorAll('.card'),
        modal = document.querySelector('.modal'),
        cardOrders = document.querySelectorAll('.card-orders'),
        cardChar = document.querySelectorAll('.card-char-1');


    addPrice();

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
    
    class PriceItems{
        constructor(price, parentSelector, ...classes){
            this.price = price;
            this.parent = document.querySelectorAll(parentSelector);
            this.classes = classes;
        }

        render(){
            const element = document.createElement('div');
            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `
            <div class="card-price">${this.price}</div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Купить</button>
            `;
            this.parent.append(element);

        }
    }

    
    function addPrice(){
        cardChar.forEach(item =>{
        return item + new PriceItems(
                "1",
                '7',
                "7"
            ).render();
        });
    }





    fetch('http://localhost:3000/offers')
    .then(data => data.json())
    .then(res => console.log(res));

    /* const getResource = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Cold no fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    } */

    const checkbox = document.querySelector('#checkbox');
    const fordocumentms = document.querySelector('form');
    const change = document.querySelector('#color');

    
    if (localStorage.getItem('isChecked')){
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', ()=>{
    localStorage.setItem('isChecked', true);

    });

    change.addEventListener('click', () =>{
        if (localStorage.getItem('bg') === 'changed'){
            form.style.backgroundcolor = '#fff';
        } else {
            localStorage.setItem('bg', 'chnged');
            form.style.backgroundcolor = red;
        }
    });
    
  
});
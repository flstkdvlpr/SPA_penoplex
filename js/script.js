window.addEventListener('DOMContentLoaded', ()=>{

    const housePc = document.querySelector('.house-pc'),
        card = document.querySelectorAll('.card-1'),
        dataCircle = document.querySelectorAll('[data-circle]');

        console.log(card);
        //console.log(dataos);
        console.log(dataCircle[1].dataset.value);


        function hideAll(){
            card.forEach(item => {
                item.classList.add('hide')
            });
        }


    card.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == 'speclink'){
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
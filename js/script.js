window.addEventListener('DOMContentLoaded', ()=>{

    const housePc = document.querySelector('.house-pc'),
        card = document.querySelectorAll('.card-1'),
        dataCircle = document.querySelectorAll('[data-circle]');

        console.log(card);
        //console.log(dataos);

        function hideAll(){
            card.forEach(item => {
                item.classList.add('hide');
            });
        }

        function showAll(){
            card.forEach(item => {
                item.classList.remove('hide');
            });
        }

housePc.addEventListener('click', (e)=>{
    if(e.target && e.target.closest(".grid-elem-2")){
        showAll();
        document.querySelector('#data-km').style.display = 'block';
        document.querySelector('#data-os').style.display = 'block';
        hideAll();
    }
});


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
            }
        });
    });
    



/* 
    fetch('http://localhost:3000/offers')
    .then(data => data.json())
    .then(res => console.log(res)); */



    
  
});
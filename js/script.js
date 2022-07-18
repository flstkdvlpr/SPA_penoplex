window.addEventListener('DOMContentLoaded', ()=>{

    const links = document.querySelectorAll(".card-link"),
        cardBody = document.querySelectorAll('.card-body'),
        cardchar = document.querySelectorAll('.card-char'),
        card = document.querySelectorAll('.card');

    function hideSpecification(){
        card.forEach(item =>{
            if (item.dataset.value == 'spectitle'){
                item.classList.add('hide');
            }
        });
        }

    function showSpecification(){
    card.forEach(item =>{
        if (item.dataset.value == 'spectitle'){
            item.classList.remove('hide');
        }
    });
    }

    hideSpecification();

    for (let i = 0; i < cardBody.length; i++){
        let self = cardBody[i];
        self.addEventListener('click',(event)=>{
            event.preventDefault();
            console.log('click');
        });
    }

});
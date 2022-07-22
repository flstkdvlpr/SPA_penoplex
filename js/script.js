window.addEventListener('DOMContentLoaded', ()=>{

    const links = document.querySelectorAll(".card-link"),
        cardBody = document.querySelectorAll('.card-body'),
        cardchar = document.querySelectorAll('.card-char'),
        card = document.querySelectorAll('.card');

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

    


/*     cardBody.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == 'speclink'){
                cardchar.forEach((item)=>{
                    if(item == e.target){
                        spicificationSide2.forEach(item =>{
                            if(e.target == item){
                                item.classList.add('show');
                                item.classList.remove('hide');
                            }
                        });
                    }
                });
            }
        });
    }); */
});
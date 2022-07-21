window.addEventListener('DOMContentLoaded', ()=>{

    const links = document.querySelectorAll(".card-link"),
        cardBody = document.querySelectorAll('.card-body'),
        cardchar = document.querySelectorAll('.card-char'),
        spicificationSide1 = document.querySelectorAll('.card-side-1'),
        spicificationSide2 = document.querySelectorAll('.card-side-2'),
        card = document.querySelectorAll('.card');

    function hideItemSpecification(){
        spicificationSide2.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
    }

    function showItemSpecification(){
        spicificationSide2.forEach(item =>{
            item.classList.add('show');
            item.classList.remove('hide');
        });
    }


    function hideItemInformation(){
        spicificationSide1.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show');
        });
    }

    function showItemInformation(){
        spicificationSide1.forEach(item =>{
            item.classList.add('show');
            item.classList.remove('hide');
        });
    }

  
    hideItemSpecification();




    cardBody.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == 'speclink'){

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
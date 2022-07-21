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


    for (let i = 0; i < cardBody.length; i++){
        cardBody[i].addEventListener('click',(event)=>{
            event.preventDefault();
            if (event.target && event.target.dataset.value == 'speclink'){
                showItemSpecification();
                hideItemInformation();
            }
        });
    }

    

});
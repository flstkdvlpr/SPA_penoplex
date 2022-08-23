function char(){
    card = document.querySelectorAll('.card-1');

    function hideAll(){
        card.forEach(item => {
            item.closest(".col").style.display = 'none';
        });
    }

    function showAll(){
        card.forEach(item => {
            item.closest(".col").style.display = 'block';
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
            }
        });
    });
}

module.exports = char;
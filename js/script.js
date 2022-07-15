window.addEventListener('DOMContentLoaded', ()=>{
    
    const links = document.querySelectorAll(".card-link"),
          cardBody = document.querySelectorAll('.card-body'),
          card = document.querySelectorAll('.card');

          console.log(links[0].parentNode.parentNode);

          function hideSpecification(){
            card.forEach(item =>{
                if (item.dataset.value == 'spectitle'){
                    item.classList.add('hide');
                }
                
            });
          }
    
    hideSpecification();
      
});


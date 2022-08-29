function char(){

    const card = document.querySelectorAll('.card-1');
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

    function hideAll(){
        card.forEach(item => {
            item.classList.add('animate__animated', 'animate__bounce');
            item.closest(".col").style.display = 'none';
        });
    }

    function showAll(){
        card.forEach(item => {
            item.closest(".col").style.display = 'block';
        });
    }

    const housePc = document.querySelector('.house-pc'),
        houseMob = document.querySelector('.house-mobile');


    function showActiveItem(...selector){
        selector.forEach(item =>{
            document.querySelector(item).closest(".col").style.display = 'block';
        });
    }
    
    

    housePc.addEventListener('click', (e)=>{
        if(e.target && (e.target.closest(".grid-elem-2") || e.target.closest(".grid-elem-6"))){
            document.querySelector(".grid-elem-2").classList.add('.animate__animated');
            hideAll();
            showActiveItem('#data-os', '#data-km', '#data-gl');
        }
        if(e.target && e.target.closest(".grid-elem-3")){
            hideAll();
            showActiveItem('#data-rf','#data-gl');
        }
    
        if(e.target && (e.target.closest(".grid-elem-4") || e.target.closest(".grid-elem-7-2") )){
            hideAll();
            showActiveItem('#data-km', '#data-os', '#data-wl', '#data-gl');
        }
        
        if(e.target && (e.target.closest(".grid-elem-9") || e.target.closest(".grid-elem-7-1") )){
            showAll();
            hideAll();
            showActiveItem('#data-fn', '#data-ge', '#data-gl');
        }
    
        if(e.target && e.target.closest(".grid-elem-10")){
            showAll();
            hideAll();
            document.querySelector('#data-eko').closest(".col").style.display = 'block';
        }
    
        
        
    });

    try{
        houseMob.addEventListener('click', (e)=>{
            if(e.target && (e.target.closest(".grid-elem-2") || e.target.closest(".grid-elem-6"))){
                hideAll();
                document.querySelector('#data-km').closest(".col").style.display = 'block';
                document.querySelector('#data-os').closest(".col").style.display = 'block';
                document.querySelector('#data-gl').closest(".col").style.display = 'block';
            }
            if(e.target && e.target.closest(".grid-elem-3")){
                showAll();
                hideAll();
                document.querySelector('#data-rf').closest(".col").style.display = 'block';
                document.querySelector('#data-gl').closest(".col").style.display = 'block';
            }
        
            if(e.target && (e.target.closest(".grid-elem-4") || e.target.closest(".grid-elem-7-2") )){
                showAll();
                hideAll();
                document.querySelector('#data-km').closest(".col").style.display = 'block';
                document.querySelector('#data-os').closest(".col").style.display = 'block';
                document.querySelector('#data-wl').closest(".col").style.display = 'block';
                document.querySelector('#data-gl').closest(".col").style.display = 'block';
            }
            
            if(e.target && (e.target.closest(".grid-elem-9") || e.target.closest(".grid-elem-7-1") )){
                showAll();
                hideAll();
                document.querySelector('#data-fn').closest(".col").style.display = 'block';
                document.querySelector('#data-ge').closest(".col").style.display = 'block';
                document.querySelector('#data-gl').closest(".col").style.display = 'block';
            }
        
            if(e.target && e.target.closest(".grid-elem-10")){
                showAll();
                hideAll();
                document.querySelector('#data-eko').closest(".col").style.display = 'block';
            } 
        });
    } catch(error){
        console.log(error.message);
    }

        
    
    
}

export default char;
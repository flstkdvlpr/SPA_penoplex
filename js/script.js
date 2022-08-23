window.addEventListener('DOMContentLoaded', ()=>{

const charracters = require('./modules/char'),
      fetches =  require('./modules/fetches'),
      hamburger =  require('./modules/hamburger'),
      circles = require('./modules/circles');

      charracters();
      fetches();
      hamburger();
      circles();
  
});
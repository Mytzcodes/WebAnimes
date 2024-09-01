const Btn_Actived = document.querySelector('.Activs');
const contrased = document.querySelector('.sects');

const show = document.getElementById('shown');


function Showing() {
    show.style.display = 'block';
    show.style.transition = '5s';
    contrased.style.filter = 'brightness(50%)';

} 

function Closing() {
    show.style.display = 'none';
    show.style.transition = '5s';
    contrased.style.filter = 'brightness(100%)';
} 



    
    
    

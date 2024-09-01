const Btn_Actived = document.querySelector('.Activs');
const contrased = document.querySelector('.sects');
const bod= document.querySelector('.bod');
const show = document.getElementById('shown');


function Showing() {
    show.style.display = 'block';
    show.style.transition = '5s';
    contrased.style.filter = 'brightness(50%)';
    Notification.requestPermission().then(perm => {(perm)})
         new Notification("MYW.Clouds", {
            body: "Thankyou For Join Website"
        })


} 

function Closing() {
    show.style.display = 'none';
    show.style.transition = '5s';
    contrased.style.filter = 'brightness(100%)';
} 

let txt= "Welcomes";

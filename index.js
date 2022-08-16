'use strict'

function buttonAnimation(key){

}

async function playSound(soudName){
    
    var audio = new Audio("./sounds/"+soudName+".mp3");

    audio.play();
}

document.addEventListener('DOMContentLoaded', ()=>{

    var buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {

        let button = buttons[i];

        button.addEventListener('click',function(event){

                button.style.color = "white";

                playSound(button.id);

                buttonAnimation(button.id)

        });

    }
})

window.addEventListener('keydown', function(event){

    playSound(event.code.slice(-1).toLowerCase());

    buttonAnimation(event.code.slice(-1).toLowerCase());

})
'use strict'

function buttonAnimation(key){
    let button = document.getElementById(key);
    button.style.color = "white";
    button.classList.add("pressed");
    setTimeout(function(){
        button.style.color = "red";
        button.classList.remove("pressed");
    },100)
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

                playSound(button.id);

                buttonAnimation(button.id)

        });

    }
})

window.addEventListener('keydown', function(event){

    playSound(event.code.slice(-1).toLowerCase());

    buttonAnimation(event.code.slice(-1).toLowerCase());

})
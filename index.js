'use strict'

document.addEventListener('DOMContentLoaded', ()=>{
    var buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click',()=>{
            console.log(button.id);
            var audio = new Audio("./sounds/"+button.id+".mp3");
            audio.play();
        });
    }
})

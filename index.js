'use strict'
function handleClick(){
    console.log("Click");;
}

document.addEventListener('DOMContentLoaded', ()=>{
    var buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener('click',handleClick);
    }
})

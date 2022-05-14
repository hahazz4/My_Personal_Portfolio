let i = 0;
let j = 0;
let k = 0;

const message = "Hi my name is Zeerak Asim.";
const message2 = "Welcome to my website! Here you can find information on who I am, my skills and my projects.";
const message3 = "You can view my resume by clicking the button below, I wish you a good day!";
const speed = 85;

function typeEffect() {
    if (i < message.length){
        document.getElementById("mainTStyle").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
    
    else if (j < message2.length){
        document.getElementById("introPara1").innerHTML += message2.charAt(j);
        j++;
        setTimeout(typeEffect, speed);
    }
        
    else if (k < message3.length){
        document.getElementById("introPara2").innerHTML += message3.charAt(k);
        k++;
        setTimeout(typeEffect, speed);
    }
}

window.onload = function() {
    typeEffect();
};
let i = 0;
let j = 0;
let k = 0;
let l = 0;
let m = 0;

const message = "Hi my name is Zeerak Asim.";
const message2 = "I am a third year Computer Engineering Student studying at Queen's University.";
const message3 = "You can view my resume by clicking on any of the two buttons below, I wish you a good day!";
const message4 = "Visual Version";
const message5 = "Simple Version";
const speed = 50;

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

    else if (l < message4.length){
        document.getElementById("resume1").innerHTML += message4.charAt(l);
        l++;
        setTimeout(typeEffect, speed);
    }

    else if (m < message5.length){
        document.getElementById("resume2").innerHTML += message5.charAt(m);
        m++;
        setTimeout(typeEffect, speed);
    }
}

window.onload = function() {
    typeEffect();
};
let i = 0;
let j = 0;
let k = 0;
let l = 0;

const message = "Hi my name is Zeerak Asim.";
const message2 = "I am a fourth year Computer Engineering Student studying at Queen's University.";
const message3 = "You can view my resume by clicking the button below, I wish you a good day!";
const message4 = "Up there ^";
const speed = 25;

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
    
    else {
        document.getElementById("resNormalButton").style.display = "block";
    }
    
}

window.onload = function() {
    typeEffect();
};

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

var video1 = document.getElementById("demoVideo1");
var video2 = document.getElementById("demoVideo2");
var video3 = document.getElementById("demoVideo3");
var video4 = document.getElementById("demoVideo4");
var video5 = document.getElementById("demoVideo5");
var video6 = document.getElementById("demoVideo6");

var btn1 = document.getElementById("videoDemoButton1");
var btn2 = document.getElementById("videoDemoButton2");
var btn3 = document.getElementById("videoDemoButton3");
var btn4 = document.getElementById("videoDemoButton4");
var btn5 = document.getElementById("videoDemoButton5");
var btn6 = document.getElementById("videoDemoButton6");

var span1 = document.getElementById("myModal1").getElementsByClassName("close")[0];
var span2 = document.getElementById("myModal2").getElementsByClassName("close")[0];
var span3 = document.getElementById("myModal3").getElementsByClassName("close")[0];
var span4 = document.getElementById("myModal4").getElementsByClassName("close")[0];
var span5 = document.getElementById("myModal5").getElementsByClassName("close")[0];
var span6 = document.getElementById("myModal6").getElementsByClassName("close")[0];

btn1.onclick = function(){
    modal1.style.display = "block";
    video1.play();
}

span1.onclick = function(){
    modal1.style.display = "none";
    video1.pause();
}

btn2.onclick = function(){
    modal2.style.display = "block";
    video2.play();
}

span2.onclick = function(){
    modal2.style.display = "none";
    video2.pause();
}

btn3.onclick = function(){
    modal3.style.display = "block";
    video3.play();
}

span3.onclick = function(){
    modal3.style.display = "none";
    video3.pause();
}

btn4.onclick = function(){
    modal4.style.display = "block";
    video4.play();
}

span4.onclick = function(){
    modal4.style.display = "none";
    video4.pause();
}

btn5.onclick = function(){
    modal5.style.display = "block";
    video5.play();
}

span5.onclick = function(){
    modal5.style.display = "none";
    video5.pause();
}

btn6.onclick = function(){
    modal6.style.display = "block";
    video6.play();
}

span6.onclick = function(){
    modal6.style.display = "none";
    video6.pause();
}

window.onclick = function(event){
    if(event.target == modal1){
        modal1.style.display = "none";
        video1.pause();
    }

    if(event.target == modal2){
        modal2.style.display = "none";
        video2.pause();
    }

    if(event.target == modal3){
        modal3.style.display = "none";
        video3.pause();
    }

    if(event.target == modal4){
        modal4.style.display = "none";
        video4.pause();
    }

    if(event.target == modal5){
        modal5.style.display = "none";
        video5.pause();
    }

    if(event.target == modal6){
        modal6.style.display = "none";
        video6.pause();
    }
}
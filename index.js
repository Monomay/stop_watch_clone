var sec = 00;
var ten = 00;
var appendTen = document.getElementById("ten");
var appendSec = document.getElementById("sec");
var buttonStart = document.getElementById("btn-start");
var buttonStop = document.getElementById("btn-stop");
var buttonReset = document.getElementById("btn-reset");
var buttonLap = document.getElementById("btn-lap");
var buttonClear = document.getElementById("lap-clear-btn");
var Laps = document.getElementById("lap");

var interval;

// start button function
function startTimer(){
    ten++;

    if(ten<9){
        appendTen.innerHTML = "0" + ten;
    }
    if(ten>9){
        appendTen.innerHTML = ten;
    }
    if(ten>99){
        sec++;
        appendSec.innerHTML = "0" + sec;
        ten = 0;
        appendTen.innerHTML = "0" + 0;
    }
    if(sec>9){
        appendSec.innerHTML = sec;
    }
}

const audio = new Audio('angela-laugh.mp3');
// audio.loop = false;

buttonStart.onclick = function (){
    interval = setInterval(startTimer);
    audio.play();
    alert('time start now');
};

const audio1 = new Audio('tone.mp3');

buttonStop.onclick = function (){
    clearInterval(interval);
    audio1.play();
    alert('time stop now');
    
};

const audio2 = new Audio('Reset.mp3');

buttonReset.onclick = function (){
    ten = "00";
    sec = "00";
    appendSec.innerHTML = sec;
    appendTen.innerHTML = ten;
    audio2.play();
    alert(`time is reset`);
}

const audio3 = new Audio('yes.mp3');
var lapitem = 1;
buttonLap.onclick = function(){
    audio3.play();
    alert(`time is stop`);
    Laps.innerHTML += "<li>" + (lapitem) + ".&nbsp" +  appendSec.innerHTML + ":" + appendTen.innerHTML;
    lapitem++;
}

const audio4 = new Audio('Clear.mp3');

function fun(){
    audio4.play();
    alert('all clear');
    Laps.innerHTML = '' ;
    Laps.append(buttonClear);
}
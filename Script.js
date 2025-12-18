var wcount = 0;
var lcount = 0;

function buttonRock(){
    var r = Math.floor(Math.random() * 3);
    if(r == 0){
        showPopup("The computer chose Rock. It's a Tie!!");
    }
    else if(r == 1){
        lcount++;
        showPopup("The computer chose Paper. You Lose!!");
    }
    else{
        wcount++;
        showPopup("The computer chose Scissors. You Win!!");
    }
}

function buttonPaper(){
    var r = Math.floor(Math.random() * 3);
    if(r == 0){
        wcount++;
        showPopup("The computer chose Rock. You Win!!");
    }
    else if(r == 1){
        showPopup("The computer chose Paper. It's a Tie!!");
    }
    else{
        lcount++;
        showPopup("The computer chose Scissors. You Lose!!");
    }
}

function buttonScissor(){
    var r = Math.floor(Math.random() * 3);
    if(r == 0){
        lcount++;
        showPopup("The computer chose Rock. You Lose!!");
    }
    else if(r == 1){
        wcount++;
        showPopup("The computer chose Paper. You Win!!");
    }
    else{
        showPopup("The computer chose Scissors. It's a Tie!!");
    }
}

function showPopup(message) {
    document.getElementById("resultText").innerHTML =
        message + "<br><br>Wins = " + wcount + "<br>Losses = " + lcount;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
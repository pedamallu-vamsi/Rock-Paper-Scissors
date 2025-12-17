function buttonRock(){
    var r=Math.floor(Math.random()*3);
    if(r==0){
        showPopup("The computer choose rock, Its a Tie!!");
    }
    else if(r==1){
        showPopup("The computer choose paper, You Lose!!");
    }else{
        showPopup("The computer chooses scissors, You Win!!");
    }
}
function buttonPaper(){
    var r=Math.floor(Math.random()*3);
    if(r==0){
        showPopup("The computer choose rock, You Win!!");
    }
    else if(r==1){
        showPopup("The computer choose paper, It's a Tie!!");
    }else{
        showPopup("The computer chooses scissors, You Lose!!");
    }
}
function buttonScissor(){
    var r=Math.floor(Math.random()*3);
    if(r==0){
        showPopup("The computer choose rock, You Lose!!");
    }
    else if(r==1){
        showPopup("The computer choose paper, You Win!!");
    }else{
        showPopup("The computer chooses scissors, It's a Tie!!");
    }
}
function showPopup(message) {
    document.getElementById("resultText").innerText = message;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

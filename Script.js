function buttonRock(){
    var r=Math.floor(Math.random()*3);
    if(r==0){
        alert("The computer choose rock, Its a Tie!!");
    }
    else if(r==1){
        alert("The computer choose paper, You Lose!!");
    }else{
        alert("The computer chooses scissors, You Win!!");
    }
}
function buttonPaper(){
    var r=Math.floor(Math.random()*3);
    if(r==0){
        alert("The computer choose rock, You Win!!");
    }
    else if(r==1){
        alert("The computer choose paper, It's a Tie!!");
    }else{
        alert("The computer chooses scissors, You Lose!!");
    }
}
function buttonScissor(){
    var r=Math.floor(Math.random()*3);
    if(r==0){
        alert("The computer choose rock, You Lose!!");
    }
    else if(r==1){
        alert("The computer choose paper, You Win!!");
    }else{
        alert("The computer chooses scissors, It's a Tie!!");
    }
}
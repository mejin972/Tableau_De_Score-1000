let containWinner = document.querySelector("#victory");
let affNameWinner;
let trophy = document.querySelector("#victory i");
let nameWinner = document.querySelector("#name_winner");
let myRules  = document.styleSheets[1].cssRules;
console.log(myRules);
let keyFrameWinner = myRules[4];
let buttOk = document.querySelector("#ok");
//console.log(keyFrameWinner.findRule('from'));


function win() {
    console.log("je suis dans la funtion win");
    containWinner.style.display = "block";
    containScore.style.display = "none";
    containName.style.display = "none";
    containTable.style.display = "none";
    nameWinner.innerText = affNameWinner;
    trophy.anim = "infinite";
}

buttOk.onclick =  () =>{
    containWinner.style.display = "none";
    containScore.style.display = "flex";
    containName.style.display = "initial";
    containTable.style.display = "flex";
}
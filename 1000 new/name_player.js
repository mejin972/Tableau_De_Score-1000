/*vARIABLE*/
let containName = document.querySelector("#nbrPlayer");
let player;
let pseudo;
let nbtPlayer; 
let buttAddPlayer = document.querySelector("#set_player");
let listePlayer = [];
console.log(listePlayer);
let containAffPlayer = document.querySelector("#affNbrplayer");
let spanAffNbrPlayer = document.querySelector("#affNbrplayer span");
let reset = document.querySelector("#reset");




/*fUNCTION*/
function Player(nom) {
    this.nom = pseudo;
}

reset.onclick = () =>{
    
        document.querySelector("#Score").innerHTML = "";
        document.querySelector("#table").innerHTML = "";
        document.querySelector("#affNbrplayer span").innerHTML = "";
        nbtPlayer = 0;
        listePlayer.length = 0;
        listeInputScore.length = 0;
        listeTotal.length = 0;
        listeTable.length = 0;
        listeButtSend.length = 0;
        buttAddPlayer.disabled = false;
    
}

let patt = /\d{1}/;

buttAddPlayer.onclick = () => {
    nbtPlayer = prompt("Quel est le nombre de joueur?");
    if (patt.test(nbtPlayer) === true) {
        if(nbtPlayer > 2){
            alert("le nombre de joueur doit etre 2");
            return;
        }
        setPlayer();
        //affNamePlayer();
        affNbrPlayer();
        createInput();
        createTable();
        if (listePlayer.length != 1) {
            buttAddPlayer.setAttribute("disabled",'true');
        }

    }else{
        alert(nbtPlayer + " its not a number")
    }
   
    
}

function setPlayer() {
    for (let p = 0; p < nbtPlayer; p++) {
        const element = nbtPlayer[p];
        pseudo = prompt("Quel est le pseudo du joueur?"+ [p]);
        player = new Player;
        listePlayer.push(player);
        
    }
}


/*function affNamePlayer() {
    for (let index = 0; index < listePlayer.length; index++) {
        const element = listePlayer[index];
        let span = document.createElement("span");
        let texteSpan = document.createTextNode(element.nom);
        span.appendChild(texteSpan);
        containName.appendChild(span);
        span.className = "name";
        
    }
}*/

function affNbrPlayer() {
    if (listePlayer.length === 1 ) {
        spanAffNbrPlayer.innerHTML = "Il y a : " + listePlayer.length + " " + "joueur";
    }else{
        spanAffNbrPlayer.innerHTML = "Il y a : " + listePlayer.length + " " + "joueurs";
    }
    
}
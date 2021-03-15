/*VARIABLE*/
let containScore = document.querySelector("#Score");
let listeButtSend = [];
console.log(listeButtSend);
let listeInputScore = [];
console.log(listeInputScore);
//let listeDeScore = [];
//console.log(listeDeScore);
let allLineScore;
let buttSend;
let total;
let listeTotal = [];
console.log(listeTotal);



/*FUNCTION*/
function createInput() {
    
    for (let index = 0; index < listePlayer.length; index++) {
        const element = listePlayer[index];
        let labelInput = document.createElement("label");
        let textLable = document.createTextNode(element.nom);
        let inputScore = document.createElement("input");
        
        labelInput.appendChild(textLable);
        containScore.appendChild(labelInput);
        containScore.appendChild(inputScore);

        labelInput.setAttribute("for", "L"+index);
        inputScore.setAttribute("id", "L"+index);
        
        listeInputScore.push(inputScore);

        
    }
    buttSend = document.createElement("button");
    let textButtSend = document.createTextNode("Send");
    buttSend.appendChild(textButtSend);
    containScore.appendChild(buttSend);
    buttSend.setAttribute("id","send");
    listeButtSend.push(buttSend);
    listeButtSend[0].onclick = () =>{
        console.log("je click");
        valueTble();
    };
}






function valueTble() {
    let sum;
    let checkIfNumber = /\d/;
    //let valueSum; 
    for (let index = 0; index < listeTable.length; index++) {
        const element = listeTable[index];
        const element2 = listeInputScore[index];
        let trTbody = document.createElement("tr");
        let tdTbody = document.createElement("td");
        if (element2.value == "") {
            element2.value = 0;
            tdTbody.innerHTML = element2.value;
            //tdTbody.innerHTML = 0;
        }else{
            tdTbody.innerHTML = element2.value;
        }
        if ( checkIfNumber.test(element2.value) != true ){
            alert(element.childNodes[0].innerText+" " + "score its not a number");
            return;
        }
        
        trTbody.appendChild(tdTbody);
        //tbody.appendChild(trTbody);
        tdTbody.className = "score"+[index];
        tdTbody.className = "value";
        element.childNodes[1].appendChild(trTbody);
        allLineScore = document.getElementById("table"+[index]).getElementsByClassName("value");
        total = document.getElementById("total"+[index]);
        listeTotal.push(total);
        sum = 0;
        for (let t = 0; t < allLineScore.length; t++) {
            const allScore = allLineScore[t];
            sum = sum + parseFloat(allScore.innerText);
        }
        total.innerText = sum;
        element2.value = "";
        if (total.innerText == 1000) {
            //alert(total.offsetParent.childNodes[0].innerText + " "+"YOU WIN");
            affNameWinner = total.offsetParent.childNodes[0].innerText;
            buttAddPlayer.disabled = false;
            reset.disabled = false;
            win();

        }
        /*listeTable.forEach(element => {
            sum = 0;
            valueSum;
            element.childNodes[2].childNodes[0].childNodes[0].innerText = sum + parseFloat(tdTbody.innerHTML);
            valueSum = parseFloat(tdTbody.innerHTML) + sum;
        //tdTfoot.innerHTML = sum + parseFloat(tdTbody.innerHTML);
        sum = valueSum;
        });
        //console.log(element.row.length);*/
    }
    
}
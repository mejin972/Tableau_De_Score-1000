/*VARIABLE*/
let containTable = document.querySelector("#table");
let listeTable = [];
console.log(listeTable);
let tbody;
let tdTbody;
let tdTfoot;
/*function*/
function createTable() {
    for (let index = 0; index < listePlayer.length; index++) {
        const element = listePlayer[index];
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let trThead = document.createElement("tr");
        let thThead = document.createElement("th");

        tbody = document.createElement("tbody");

        let tfoot = document.createElement("tfoot");
        let trTfoot = document.createElement("tr");
        tdTfoot = document.createElement("td");

        trThead.appendChild(thThead);
        thead.appendChild(trThead);
        trTfoot.appendChild(tdTfoot);
        tfoot.appendChild(trTfoot);
        table.appendChild(thead);
        table.appendChild(tbody);
        table.appendChild(tfoot);
        
               
        containTable.appendChild(table);

        table.setAttribute("id", "table"+[index]);
        tdTfoot.setAttribute("id", "total"+[index]);
        thThead.innerHTML = element.nom;
        listeTable.push(table);
    
    }
}
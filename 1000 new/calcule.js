let scoreTble; 

function calcule() {
    for (let index = 0; index < listeTable.length; index++) {
        const table = listeTable[index];
        sum = 0;
        //console.log(table.childNodes[1].children + `table ${[index]}`);
        for (const scoreTble in listeTable) {
            if (Object.hasOwnProperty.call(listeTable, scoreTble)) {
                const element = listeTable[scoreTble];
                console.log(element);
            }
        }
    }
}
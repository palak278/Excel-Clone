let rows = 100;
let columns = 26;

let addressRowCont = document.querySelector(".address-row-cont");
let addressColumnCont = document.querySelector(".address-column-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");

for( let i = 0 ; i < rows ; i++ ) {
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class", "address-row");    //for css styling
    addressRow.innerText = i+1;
    addressRowCont.appendChild(addressRow);
}

for( let i = 0 ; i < columns ; i++ ) {
    let addressColumn = document.createElement("div");
    addressColumn.setAttribute("class", "address-column");  //for css styling
    addressColumn.innerText = String.fromCharCode(65 + i);
    addressColumnCont.appendChild(addressColumn);
}

for( let i = 0 ; i< rows ; i++ ) {
    rowCont = document.createElement("div");
    rowCont.setAttribute("class", "row-cont");
    for(let j = 0 ; j < columns ; j++ ) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");    //for css styling
        cell.setAttribute("contenteditable", "true");
        cell.setAttribute("spellcheck", "false");
1
        //Attributes for cell and storage identification
        cell.setAttribute("rid", i);
        cell.setAttribute("cid", j);

        rowCont.appendChild(cell);
        addListenerForAddressBarDisplay( cell , i , j );
    }
    cellsCont.appendChild(rowCont);
}

function addListenerForAddressBarDisplay( cell , i , j ) {
    cell.addEventListener("click" , (e) => {
        let rowID = i+1;
        let colID = String.fromCharCode(65 + j);
        addressBar.value = `${colID}${rowID}`;
    })
}

// By default click on first cell via DOM
let firstCell = document.querySelector(".cell");
firstCell.click();


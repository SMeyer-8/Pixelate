// Your code here
/*Clock(updates the included parameters at a set interval)*/
setInterval(()=>tick(),500);
function tick(){
    currentColor = selectTable.value;
    COLUMN_NUMBER = columnNumber.valueAsNumber;
    ROW_NUMBER = rowNumber.valueAsNumber;   
}
//////////////////////////////////////////////////////////////

/** Global variables and variables pulling in tags or selectors */
const table = document.getElementsByTagName('table')[0];
const addRowButton = document.getElementById('add-row');
const addColumnButton = document.getElementById('add-column');
const fillGridButton = document.getElementById('fill-grid');
const fillBlanksButton = document.getElementById('fill-blanks');
const removeRowButton = document.getElementById('remove-row');
const removeColumnButton = document.getElementById('remove-column');
const buildButton = document.getElementById('build-button');
const clearButton = document.getElementById('clear-grid');
const selectTable = document.getElementById('select-box');
const columnNumber = document.getElementById('column-number');
const rowNumber = document.getElementById('row-number');
let COLUMN_NUMBER = columnNumber.valueAsNumber;
let ROW_NUMBER = rowNumber.valueAsNumber;
let currentColor = selectTable.value;
let color = currentColor;
let isDrawing = false;
//////////////////////////////////////////////////////////////

/**Buttons and user interface listeners */////////////////////
addRowButton.addEventListener('click', makeRow);
addColumnButton.addEventListener('click',makeColumn);
removeRowButton.addEventListener('click',removeRow);
removeColumnButton.addEventListener('click',removeColumn);
fillGridButton.addEventListener('click',fillInGrid);
fillBlanksButton.addEventListener('click',fillInBlanks);
clearButton.addEventListener('click',clearGrid);
buildButton.addEventListener('click',buildGrid);
selectTable.addEventListener('change',colorChange);
table.addEventListener('click', colorize);
table.addEventListener('mousedown',(e)=>{
    isDrawing = true;
   
})
table.addEventListener('mouseover',(e)=>{
    if(isDrawing === true){
        if(e.target.tagName === "TD"){
            const tdCell = e.target;
            console.log(tdCell);
            tdCell.className = color;
        }
    }
})
table.addEventListener('mouseup',(e)=>{
    isDrawing = false;
})
//////////////////////////////////////////////////////////////

/**Event processing */
function makeRow(event){
    const row = document.createElement('tr')
    for (let i = 0; i < COLUMN_NUMBER; i++) {
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}
function makeColumn(event){
   
   const tableRows = document.querySelectorAll('table tr')
   for(let i = 0;i<tableRows.length;i++){
    const td = document.createElement('td');
    tableRows[i].appendChild(td);
    console.log(tableRows)
   }
   console.log(tableRows) 
}
function removeRow(event){
    const tableRows = document.querySelectorAll('table tr');
    tableRows[tableRows.length-1].remove();
    
}
function removeColumn(event){
    
    const tableRows = document.querySelectorAll('table tr');
    for(let i = 0;i<tableRows.length;i++){
    tableRows[i].lastChild.remove();
   }

}
function buildGrid(event){
    destroyGrid();
    for(let i = 0;i<ROW_NUMBER;i++){
        const row = document.createElement('tr');
        for(let k = 0;k<COLUMN_NUMBER;k++){
            const td = document.createElement('td');
            row.appendChild(td)
        }
        table.appendChild(row)  
    }
}
function colorize(event){
    
    if(event.target.tagName === "TD"){
        const tdCell = event.target
    
        if(tdCell.className === color){
            tdCell.className = "";
        }else{
        tdCell.className = color;
        }
    }
   
   
}

function colorChange(event){
    color = event.target.value;
   
   }
function fillInGrid(event){
let grid = document.querySelectorAll('table tr td')
    for(let i = 0;i<grid.length;i++){
        grid[i].className = color;
    }

}
function fillInBlanks(event){
    let grid = document.querySelectorAll('table tr td')
    for(let i = 0;i<grid.length;i++){
        if(grid[i].className === ""){
            grid[i].className = color;
        }
        
    }

}
function clearGrid (event){
    let grid = document.querySelectorAll('table tr td')
    for(let i = 0;i<grid.length;i++){
        grid[i].className = "";
    }
}
//////////////////////////////////////////////////////////////

/**processing */
function destroyGrid(){
    const cellRow = document.querySelectorAll('table tr')
    for(let i = 0;i<cellRow.length;i++){
        cellRow[i].remove();
    }
}


//////////////////////////////////////////////////////////////









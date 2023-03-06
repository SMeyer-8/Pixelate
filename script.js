// Your code here
/*Clock(updates the included parameters at a set interval)*/
setInterval(()=>tick(),500);
function tick(){
    currentColor = selectTable.value;   
}
//////////////////////////////////////////////////////////////

/** Global variables and variables pulling in tags or selectors */
const table = document.getElementsByTagName('table')[0];
const addRowButton = document.getElementById('add-row');
const fillGridButton = document.getElementById('fill-grid');
const fillBlanksButton = document.getElementById('fill-blanks');
const clearButton = document.getElementById('clear-grid');
const selectTable = document.getElementById('select-box');
let currentColor = selectTable.value;
let color = currentColor;
let isDrawing = false;
//////////////////////////////////////////////////////////////

/**Buttons and user interface listeners */////////////////////
addRowButton.addEventListener('click', makeRow);
fillGridButton.addEventListener('click',fillInGrid);
fillBlanksButton.addEventListener('click',fillInBlanks);
clearButton.addEventListener('click',clearGrid);
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
    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}
function colorize(event){
    //console.log(event)
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
makeRow()
makeRow()
//////////////////////////////////////////////////////////////









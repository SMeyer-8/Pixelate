// Your code here


const table = document.getElementsByTagName('table')[0];

function makeRow(event){
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}

makeRow()
makeRow()

const addRowButton = document.getElementById('add-row')
addRowButton.addEventListener('click', makeRow);

table.addEventListener('click', colorize);
function colorize(event){
    
    tdCell = event.target
    if (tdCell.className.length){
        tdCell.className = ""
     
    }
    else{
        tdCell.className = 'red'
    }
   
  
    
    console.log(event);
}

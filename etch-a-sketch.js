function createGrid(column, row) {
    let container = document.createElement("div");
    container.id = 'container';
    document.body.appendChild(container);
    for (let i = 0; i < column; i++) {
        let column = document.createElement("div");
        column.className = 'column';
        console.log ("Box created");
        container.appendChild(column);
        for (let j = 0; j < row; j++) {
            let row = document.createElement("div");
            row.className = 'box'
            console.log ("Box created");
            column.appendChild(row);
        }
    }
    let pixels = document.querySelectorAll('.box');

pixels.forEach(item => item.addEventListener('mouseover', (e) => {
    changeColor(item);
}))

const changeColor = (item) => {
    item.style.background = 'black';
}
}

createGrid(16,16);

let newGrid = document.createElement("button");
document.body.prepend(newGrid);
newGrid.textContent = "New Grid";

newGrid.addEventListener('click', (e) => {
    let userColumn = prompt('Please enter the number of columns on the new grid:');
    if (isNaN(userColumn) || userColumn < 1 || userColumn > 100 ) {
        alert("Not a valid number!");
        return;
    }
    let userRow = prompt ('Please enter the number of rows on the new grid:');
    if (isNaN(userRow) || userRow < 1 || userRow > 100 ) {
        alert("Not a valid number!");
        return;
    }

    let oldContainer = document.getElementById('container');
    if (oldContainer) {
        oldContainer.remove();
    }

    createGrid(userColumn, userRow);

});
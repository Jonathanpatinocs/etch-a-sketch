const container = document.getElementById('container');
const gridButton = document.getElementById('gridButton');
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.className = 'row';
    for (let j = 0; j < 16; j++ ) {
        let box = document.createElement('div');
        box.className = 'box';
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = 'red';
        })
        row.appendChild(box);
    }
    container.appendChild(row);
}

gridButton.addEventListener('click', function() {
    let newRows = prompt("How many Rows");
    let newColumns = prompt("How many Columns");
    while(container.firstChild) {
        container.removeChild(container.lastChild)
    }
    for (let i = 0; i < newColumns; i++) {
        const row = document.createElement("div");
        row.className = 'row';
        for (let j = 0; j < newRows; j++ ) {
            let box = document.createElement('div');
            box.className = 'box';
            box.addEventListener('mouseover', function() {
                box.style.backgroundColor = 'red';
            })
            row.appendChild(box);
        }
        container.appendChild(row);
    }

})
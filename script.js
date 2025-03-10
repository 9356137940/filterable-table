
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    addTableRow();
});


function addTableRow() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

  
    if (!name || !email || !age) {
        alert('Please fill in all fields.');
        return;
    }

    const tableBody = document.getElementById('table-body');
    const newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${age}</td>
    `;


    document.getElementById('registration-form').reset();
}


function sortTable(columnIndex) {
    const table = document.getElementById('registration-table');
    const rows = Array.from(table.rows).slice(1); 
    const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();
        
        if (cellA < cellB) return -1;
        if (cellA > cellB) return 1;
        return 0;
    });


    table.tBodies[0].append(...sortedRows);
}


document.getElementById('search-name').addEventListener('input', function () {
    const filterValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#table-body tr');

    rows.forEach(row => {
        const nameCell = row.cells[0].innerText.toLowerCase();
        if (nameCell.includes(filterValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

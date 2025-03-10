// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    addTableRow();
});

// Add new row to the table
function addTableRow() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    // Prevent adding empty rows
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

    // Clear the form fields
    document.getElementById('registration-form').reset();
}

// Sort the table by a particular column index (0 = Name, 1 = Email, 2 = Age)
function sortTable(columnIndex) {
    const table = document.getElementById('registration-table');
    const rows = Array.from(table.rows).slice(1);  // Exclude header row
    const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();
        
        if (cellA < cellB) return -1;
        if (cellA > cellB) return 1;
        return 0;
    });

    // Reattach sorted rows
    table.tBodies[0].append(...sortedRows);
}

// Filter the table rows by name input
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

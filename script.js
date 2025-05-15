document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('rows').value = '';
    document.getElementById('cols').value = '';
});

function generateTable() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const container = document.getElementById('tableContainer');
    container.innerHTML = '';

    if (isNaN(rows) || isNaN(cols) || rows < 2 || rows > 10 || cols < 2 || cols > 10) {
        alert('Please enter numbers between 2 and 10');
        return;
    }

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${cols}, auto)`;

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const cell = document.createElement('div');
            cell.className = 'grid-item';
            cell.textContent = i * j;
            container.appendChild(cell);
        }
    }
}

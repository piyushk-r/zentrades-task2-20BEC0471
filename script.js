function importData() {
    const fileInput = document.getElementById('fileInput');
    const availableFieldsSelect = document.getElementById('availableFields');
    const displayedFieldsSelect = document.getElementById('displayedFields');

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const data = JSON.parse(event.target.result);
        populateFieldsSelects(data, availableFieldsSelect, displayedFieldsSelect);
    };

    reader.readAsText(file);
}

function populateFieldsSelects(data, availableFieldsSelect, displayedFieldsSelect) {
    // Assuming the JSON data is an array of objects with key-value pairs
    if (data.length > 0) {
        const sampleObject = data[0];

        for (const key in sampleObject) {
            if (sampleObject.hasOwnProperty(key)) {
                const option = document.createElement('option');
                option.value = key;
                option.text = key;
                availableFieldsSelect.appendChild(option);
            }
        }
    }
}

function moveToDisplayed() {
    moveOptions('availableFields', 'displayedFields');
}

function moveToAvailable() {
    moveOptions('displayedFields', 'availableFields');
}

function moveOptions(fromId, toId) {
    const fromSelect = document.getElementById(fromId);
    const toSelect = document.getElementById(toId);

    const selectedOptions = Array.from(fromSelect.selectedOptions);

    selectedOptions.forEach(option => {
        toSelect.appendChild(option);
    });
}

function displayTable() {
    const displayedFieldsSelect = document.getElementById('displayedFields');
    const tableContainer = document.getElementById('tableContainer');

    const selectedFields = Array.from(displayedFieldsSelect.options).map(option => option.value);

    // Assuming data is already loaded and available in a variable named 'data'
    const data = [
        // Your JSON data here
    ];

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table header
    const headerRow = document.createElement('tr');
    selectedFields.forEach(field => {
        const th = document.createElement('th');
        th.textContent = field;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    data.forEach(item => {
        const tr = document.createElement('tr');
        selectedFields.forEach(field => {
            const td = document.createElement('td');
            td.textContent = item[field];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}


// script.js

function readFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const fileContents = e.target.result;

            if (file.name.endsWith('.csv') || file.type === 'application/vnd.ms-excel') {
                displayCSV(fileContents);
            } else if (file.name.endsWith('.json') || file.type === 'application/json') {
                displayJSON(fileContents);
            } else {
                alert('Unsupported file format. Please upload a CSV or JSON file.');
            }
        };

        reader.readAsText(file);
    } else {
        alert('Please select a file.');
    }
}

function displayCSV(csv) {
    const rows = csv.split('\n');
    const tableBody = document.createElement('tbody');

    rows.forEach(row => {
        const columns = row.split(',');
        const rowElement = document.createElement('tr');

        columns.forEach(column => {
            const cellElement = document.createElement('td');
            cellElement.textContent = column;
            rowElement.appendChild(cellElement);
        });

        tableBody.appendChild(rowElement);
    });

    openNewPage(tableBody);
}

function displayJSON(json) {
    const data = JSON.parse(json);
    const tableBody = document.createElement('tbody');

    data.forEach(rowData => {
        const rowElement = document.createElement('tr');

        Object.values(rowData).forEach(value => {
            const cellElement = document.createElement('td');
            cellElement.textContent = value;
            rowElement.appendChild(cellElement);
        });

        tableBody.appendChild(rowElement);
    });

    openNewPage(tableBody);
}

function openNewPage(tableBody) {
    const newWindow = window.open('');
    newWindow.document.write('<html><head><title>File Contents</title>');
    newWindow.document.write('<style>');
    newWindow.document.write('body { font-family: Arial, sans-serif; margin: 20px; }');
    newWindow.document.write('#fileTable { border-collapse: collapse; width: 100%; margin-top: 20px; }');
    newWindow.document.write('#fileTable th, #fileTable td { border: 1px solid #ddd; padding: 12px; text-align: left; }');
    newWindow.document.write('#fileTable th { background-color: #f2f2f2; }');
    newWindow.document.write('</style>');
    newWindow.document.write('</head><body>');
    newWindow.document.write('<h2>File Contents</h2>');
    newWindow.document.write('<table id="fileTable"></table>');
    newWindow.document.write('</body></html>');

    const fileTable = newWindow.document.getElementById('fileTable');
    fileTable.appendChild(tableBody.cloneNode(true));
}

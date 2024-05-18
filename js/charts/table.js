export function drawTable(labels, data, parentDivId) {
    const parentDiv = document.getElementById(parentDivId);
    if (!parentDiv) {
      console.error('Parent div not found');
      return;
    }

    // Limpiar cualquier contenido previo del div
    parentDiv.innerHTML = '';
  
    // Crear la tabla y encabezados
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const nameHeader = document.createElement('th');
    const birthdayHeader = document.createElement('th');
    nameHeader.textContent = 'Nombre';
    birthdayHeader.textContent = 'Fecha de Nacimiento';
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(birthdayHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    const tbody = document.createElement('tbody');
    for (let i = 0; i < labels.length; i++) {
      const labelVar = labels[i];
      const dataVar = data[i];
  
      const row = document.createElement('tr');
      const labelCell = document.createElement('td');
      const dataCell = document.createElement('td');
      labelCell.textContent = labelVar;
      dataCell.textContent = dataVar;
      row.appendChild(labelCell);
      row.appendChild(dataCell);
      tbody.appendChild(row);
    }
    table.appendChild(tbody);
    parentDiv.appendChild(table);
  }
  
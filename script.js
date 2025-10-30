// Espera a que el contenido de la página esté listo
document.addEventListener('DOMContentLoaded', () => {

    // Encuentra el 'div' que usaremos como contenedor
    const table = document.getElementById('periodic-table');

    // Revisa si el contenedor existe y si tenemos datos
    if (table && typeof elementsData !== 'undefined') {

        // Itera (hace un bucle) sobre cada elemento en el array 'elementsData'
        elementsData.forEach(element => {

            // 1. Crear el 'div' principal del elemento
            const elementDiv = document.createElement('div');

            // 2. Añadir las clases. Ej: "element" y "hydrogen"
            // Usamos la 'category' de nuestro archivo de datos
            elementDiv.classList.add('element', element.category);

            // 3. Establecer la posición en el grid (columna y fila)
            elementDiv.style.gridRow = element.row;
            elementDiv.style.gridColumn = element.column;

            // 4. Crear el contenido HTML interno usando los datos
// 4. Crear el contenido HTML interno usando los datos
const innerHTML = `
    <div class="atomic-number">${element.number}</div>
    <div class="symbol">${element.symbol}</div>
    <div class="name">${element.name}</div>
    <div class="mass">${element.mass}</div>
    <div class="tooltip">
        <p><strong>Nombre:</strong> ${element.name}</p>
        <p><strong>Símbolo:</strong> ${element.symbol}</p>
        <p><strong>Número Atómico:</strong> ${element.number}</p>
        <p><strong>Masa Atómica:</strong> ${element.mass} u</p>
        <p><strong>Tipo:</strong> ${element.type}</p>
        <p><strong>Estado Físico:</strong> ${element.state}</p>
        <p><strong>Config. Electrónica:</strong> ${element.config}</p> <div class="image-placeholder" style="background-image: url('${element.image}');"></div>
    </div>
`;

            // 5. Asignar el HTML interno al 'div' del elemento
            elementDiv.innerHTML = innerHTML;

            // 6. Añadir el 'div' del elemento recién creado a la tabla
            table.appendChild(elementDiv);
        });
    } else {
        console.error("No se encontró el contenedor de la tabla o los datos de los elementos.");
    }
});
// Obtener el elemento del pie de página con el id "year"
const yearElement = document.getElementById('year');

// Obtener el año actual
const currentYear = new Date().getFullYear();

// Mostrar el año actual en el pie de página
yearElement.textContent = yearElement.textContent.replace('[Año]', currentYear);

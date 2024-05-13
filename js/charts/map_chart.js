
// Función para representar múltiples ubicaciones en un mapa
export function drawMap(locations, chartTag, init_coordenates = [0,0], zoom = 2) {
    // Verifica si el elemento con el ID mapElementId existe en el DOM
    const mapElement = document.getElementById(chartTag);
    if (!mapElement) {
        console.error(`Element with ID '${chartTag}' not found.`);
        return;
    }

    // Crea un mapa Leaflet en el elemento identificado por mapElementId
    var map = L.map(mapElement).setView(init_coordenates, zoom);

    // Añade capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Añade marcadores con etiquetas
    locations.forEach(location => {
        L.marker([location.lat, location.long]).addTo(map)
            .bindPopup(location.label)
            .openPopup();
    });
}

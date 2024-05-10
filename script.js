document.getElementById('consultButton').addEventListener('click', function() {
  executeQuery(sparqlQuery);
});

function executeQuery(query) {
  // Consulta SPARQL para obtener las 10 ciudades más grandes de España sin duplicados
  const sparqlQuery = `
  SELECT DISTINCT ?cityLabel (MAX(?population) AS ?maxPopulation)
  WHERE {
    ?city wdt:P31/wdt:P279* wd:Q515 ;    # Filtrar entidades que son instancias de ciudades
          wdt:P17 wd:Q29 ;               # Filtrar ciudades ubicadas en España
          wdt:P1082 ?population ;        # Obtener la población de la ciudad
          rdfs:label ?cityLabel .        # Obtener el nombre de la ciudad
    FILTER(LANG(?cityLabel) = "es")      # Filtrar los nombres de las ciudades en español
  }
  GROUP BY ?cityLabel
  ORDER BY DESC(?maxPopulation)          # Ordenar las ciudades por población máxima de manera descendente
  LIMIT 10                               # Limitar el resultado a las 10 primeras ciudades
  `;

  document.getElementById('sparqlQuery').innerText = query;

  fetch('https://query.wikidata.org/sparql?query=' + encodeURIComponent(query) + '&format=json')
    .then(response => response.json())
    .then(data => {
      const results = data.results.bindings;
      console.log("Resultados de la consulta:");
      console.log(results);

      // Procesar los resultados para crear el gráfico de tarta
      const cities = [];
      const populations = [];
      results.forEach(item => {
        cities.push(item.cityLabel.value);
        populations.push(parseInt(item.maxPopulation.value));
      });

      createPieChart(cities, populations);
    })
    .catch(error => console.error('Error:', error));
}

let myPieChart; // Variable global para almacenar la instancia del gráfico


function createPieChart(labels, data) {
  if (myPieChart) {
    myPieChart.destroy(); // Destruir el gráfico existente si hay uno
  }

  const backgroundColors = labels.map(() => createRandomColor());

  const ctx = document.getElementById('pieChart').getContext('2d');
  myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: 'Población',
        data: data,
        backgroundColor: backgroundColors,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Población'
      }
    }
  });
}

function createRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
}



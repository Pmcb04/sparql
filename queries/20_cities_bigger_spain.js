function createRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
}

document.getElementsByClassName('20_cities_bigger_spain')[0].addEventListener('click', function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates
    let sparqlQuery = `
    SELECT DISTINCT ?cityLabel (MAX(?population) AS ?maxPopulation)
    WHERE {
      ?city wdt:P31/wdt:P279* wd:Q515 ;    # Filter entities that are instances of cities
            wdt:P17 wd:Q29 ;               # Filter cities located in Spain
            wdt:P1082 ?population ;        # Get the population of the city
            rdfs:label ?cityLabel .        # Get the name of the city
      FILTER(LANG(?cityLabel) = "en")      # Filter city names in English
    }
    GROUP BY ?cityLabel
    ORDER BY DESC(?maxPopulation)          # Sort cities by maximum population in descending order
    LIMIT 20                               # Limit the result to the top 10 cities
    `;
   executeQuery2(sparqlQuery);
 });
 
 function executeQuery2(query) {
  
 
   document.getElementById('sparqlQuery_2').innerText = query;
 
   fetch('https://query.wikidata.org/sparql?query=' + encodeURIComponent(query) + '&format=json')
     .then(response => response.json())
     .then(data => {
       const results = data.results.bindings;

       const cities = [];
       const populations = [];
       results.forEach(item => {
         cities.push(item.cityLabel.value);
         populations.push(parseInt(item.maxPopulation.value));
       });
 
       createPieChart2(cities, populations, 'Population', 'right');
     })
     .catch(error => console.error('Error:', error));
 }
 
 let myPieChart2;
 
 
 function createPieChart2(labels, data, dataName, legendPosition) {
   if (myPieChart2) {
     myPieChart2.destroy();
   }
 
   const backgroundColors = labels.map(() => createRandomColor());
 
   const ctx = document.getElementById('pieChart_2').getContext('2d');
   myPieChart2 = new Chart(ctx, {
     type: 'pie',
     data: {
       labels: labels,
       datasets: [{
         label: dataName,
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
         text: dataName
       },
       plugins: {
         legend: {
           display: true,
           position: legendPosition
         }
       }
     }
   });
 }
 

 
 
 
import { drawBarChart } from '../charts/bar_chart.js';
import { distiric_less_population_spain } from '../queries/dbpedia.js';
import { executeQueryDBpedia } from '../sparql_endpoint.js';

let distiric_less_population_spain_chart = null;

const CLASS_NAME = 'distiric_less_population_spain'
const SPARQL_QUERY_TAG = 'sparqlQuery_8'
const PIE_CHART_TAG = 'pieChart_8'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = distiric_less_population_spain;

  let data = await executeQueryDBpedia(distiric_less_population_spain);

  console.log("data", data);

  const cities = [];
  const populationDensity = [];

  data.forEach(item => {
    cities.push(item.cityLabel.value);
    populationDensity.push(item.populationDensity.value);
  });

  drawBarChart(distiric_less_population_spain_chart, cities, populationDensity, "Population Density in the smaller cities", 'Population Density', 'Population Density', PIE_CHART_TAG);


});
 


 
 
 
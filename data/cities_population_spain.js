import { drawPieChart } from '../charts/pie_chart.js';
import { cities_population_spain } from '../queries.js';
import { executeQueryWikidata } from '../sparql_endpoint.js';

let cities_population_spain_chart = null;

const CLASS_NAME = 'cities_population_spain'
const SPARQL_QUERY_TAG = 'sparqlQuery_2'
const PIE_CHART_TAG = 'pieChart_2'
const PIE_CHART_LEYEND_POSITION = 'right'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = cities_population_spain;

  let data = await executeQueryWikidata(cities_population_spain);

  const cities = [];
  const population = [];

  data.forEach(item => {
    cities.push(item.cityLabel.value);
    population.push(parseInt(item.maxPopulation.value));
  });

  cities_population_spain_chart = drawPieChart(cities_population_spain_chart, cities, population, 'Citizens', PIE_CHART_LEYEND_POSITION, PIE_CHART_TAG);
 });
 


 
 
 
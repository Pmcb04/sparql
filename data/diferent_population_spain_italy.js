import { drawBarChart } from '../charts/bar_chart.js';
import { diferent_population_spain_italy } from '../queries.js';
import { executeQueryWikidata } from '../sparql_endpoint.js';

let diferent_population_spain_italy_chart = null;

const CLASS_NAME = 'diferent_population_spain_italy'
const SPARQL_QUERY_TAG = 'sparqlQuery_4'
const PIE_CHART_TAG = 'pieChart_4'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = diferent_population_spain_italy;

  let data = await executeQueryWikidata(diferent_population_spain_italy);

  const cities = [];
  const population = [];

  data.forEach(item => {
    cities.push(item.cityLabel.value);
    population.push(parseInt(item.population.value));
  });

  diferent_population_spain_italy_chart = drawBarChart(diferent_population_spain_italy_chart, cities, population, "Population in the bigger cities", 'Population', 'Population', PIE_CHART_TAG);
 });
 


 
 
 
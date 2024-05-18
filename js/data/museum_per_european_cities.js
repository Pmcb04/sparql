import { drawPieChart } from '../charts/pie_chart.js';
import { museum_per_european_cities } from '../queries/wikidata.js';
import { executeQueryWikidata } from '../sparql_endpoint.js';

let museum_per_european_cities_chart = null;

const CLASS_NAME = 'museum_per_european_cities'
const SPARQL_QUERY_TAG = 'sparqlQuery_20'
const PIE_CHART_TAG = 'pieChart_20'
const PIE_CHART_LEYEND_POSITION = 'right'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = museum_per_european_cities;

  let data = await executeQueryWikidata(museum_per_european_cities);

  const cities = [];
  const museumsPer100k = [];

  data.forEach(item => {
    cities.push(item.cityLabel.value);
    museumsPer100k.push(parseInt(item.museumsPer100k.value));
  });

  museum_per_european_cities_chart = drawPieChart(museum_per_european_cities_chart, cities, museumsPer100k, 'Museums per 100.000 citizens', PIE_CHART_LEYEND_POSITION, PIE_CHART_TAG);
 });
 


 
 
 
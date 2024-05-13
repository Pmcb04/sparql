import { drawLineChart } from '../charts/line_chart.js';
import { count_musuems_spain } from '../queries/dbpedia.js';
import { executeQueryDBpedia } from '../sparql_endpoint.js';

let museum_spain_chart = null;

const CLASS_NAME = 'museum_spain'
const SPARQL_QUERY_TAG = 'sparqlQuery_9'
const PIE_CHART_TAG = 'pieChart_9'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = count_musuems_spain;

  let data = await executeQueryDBpedia(count_musuems_spain);

  const cities = [];
  const museums = [];

  data.forEach(item => {
    cities.push(item.cityLabel.value);
    museums.push(item.museumCount.value);
  });

  museum_spain_chart = drawLineChart(museum_spain_chart, cities, museums, 'Number of museums', PIE_CHART_TAG);



});
 


 
 
 
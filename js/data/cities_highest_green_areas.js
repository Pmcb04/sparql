import { drawPieChart } from '../charts/pie_chart.js';
import { cities_highest_green_areas } from '../queries/wikidata.js';
import { executeQueryWikidata } from '../sparql_endpoint.js';

let cities_highest_green_areas_chart = null;

const CLASS_NAME = 'cities_highest_green_areas'
const SPARQL_QUERY_TAG = 'sparqlQuery_3'
const PIE_CHART_TAG = 'pieChart_3'
const PIE_CHART_LEYEND_POSITION = 'right'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = cities_highest_green_areas;

  let data = await executeQueryWikidata(cities_highest_green_areas);

  const cities = [];
  const areas = [];

  data.forEach(item => {
    cities.push(item.cityLabel.value);
    areas.push(parseInt(item.greenAreaPercentage.value));
  });

  cities_highest_green_areas_chart = drawPieChart(cities_highest_green_areas_chart, cities, areas, 'Area', PIE_CHART_LEYEND_POSITION, PIE_CHART_TAG);
 });
 


 
 
 
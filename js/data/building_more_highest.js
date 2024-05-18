import { drawPieChart } from '../charts/pie_chart.js';
import { building_more_highest } from '../queries/wikidata.js';
import { executeQueryWikidata } from '../sparql_endpoint.js';

let building_more_highest_chart = null;

const CLASS_NAME = 'building_more_highest'
const SPARQL_QUERY_TAG = 'sparqlQuery_18'
const PIE_CHART_TAG = 'pieChart_18'
const PIE_CHART_LEYEND_POSITION = 'right'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = building_more_highest;

  let data = await executeQueryWikidata(building_more_highest);

  const buildings = [];
  const heights = [];

  data.forEach(item => {
    buildings.push(item.buildingLabel.value);
    heights.push(parseInt(item.height.value));
  });

  building_more_highest_chart = drawPieChart(building_more_highest_chart, buildings, heights, 'Heights', PIE_CHART_LEYEND_POSITION, PIE_CHART_TAG);
 });
 


 
 
 
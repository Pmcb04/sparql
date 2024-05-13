import { drawPieChart } from '../charts/pie_chart.js';
import { cities_bigger_spain } from '../queries/wikidata.js';
import { executeQueryWikidata } from '../sparql_endpoint.js';

let cities_bigger_spain_chart = null;

const CLASS_NAME = 'cities_bigger_spain'
const SPARQL_QUERY_TAG = 'sparqlQuery'
const PIE_CHART_TAG = 'pieChart'
const PIE_CHART_LEYEND_POSITION = 'right'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = cities_bigger_spain;

  let data = await executeQueryWikidata(cities_bigger_spain);

  const cities = [];
  const areas = [];

  data.forEach(item => {
    cities.push(item.cityLabel.value);
    areas.push(parseInt(item.maxArea.value));
  });

  cities_bigger_spain_chart = drawPieChart(cities_bigger_spain_chart, cities, areas, 'Area', PIE_CHART_LEYEND_POSITION, PIE_CHART_TAG);
 });
 


 
 
 
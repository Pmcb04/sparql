import { drawLineChart } from '../charts/line_chart.js';
import { historical_population_badajoz } from '../queries.js';
import { executeQueryWikidata } from '../sparql_endpoint.js';

let historical_population_badajoz_chart = null;

const CLASS_NAME = 'historical_population_badajoz'
const SPARQL_QUERY_TAG = 'sparqlQuery_5'
const PIE_CHART_TAG = 'pieChart_5'
const PIE_CHART_LEYEND_POSITION = 'right'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = historical_population_badajoz;

  let data = await executeQueryWikidata(historical_population_badajoz);

  const population = [];
  const years = [];

  console.log("data", data);

  data.forEach(item => {
    years.push(item.year.value);
    population.push(parseInt(item.population.value));
  });

  historical_population_badajoz_chart = drawLineChart(historical_population_badajoz_chart, years, population, 'Population Badajoz City', PIE_CHART_TAG);
 });
 


 
 
 
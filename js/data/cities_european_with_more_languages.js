import { drawLineChart } from '../charts/line_chart.js';
import { cities_european_with_more_languages } from '../queries/wikidata.js';
import { executeQueryWikidata } from '../sparql_endpoint.js';

let cities_european_with_more_languages_chart = null;

const CLASS_NAME = 'cities_european_with_more_languages'
const SPARQL_QUERY_TAG = 'sparqlQuery_19'
const PIE_CHART_TAG = 'pieChart_19'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = cities_european_with_more_languages;

  let data = await executeQueryWikidata(cities_european_with_more_languages);

  const cities = [];
  const languages = [];

  data.forEach(item => {
    cities.push(item.cityLabel.value);
    languages.push(parseInt(item.numLanguages.value));
  });

  cities_european_with_more_languages_chart = drawLineChart(cities_european_with_more_languages_chart, cities, languages, 'Cities with more languages', PIE_CHART_TAG);
 });
 


 
 
 
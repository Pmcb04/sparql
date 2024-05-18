import { drawBarChart } from '../charts/bar_chart.js';
import { european_scientists_with_more_publications } from '../queries/wikidata.js';
import { executeQueryWikidata } from '../sparql_endpoint.js';

let european_scientists_with_more_publications_chart = null;

const CLASS_NAME = 'european_scientists_with_more_publications'
const SPARQL_QUERY_TAG = 'sparqlQuery_17'
const PIE_CHART_TAG = 'pieChart_17'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = european_scientists_with_more_publications;

  let data = await executeQueryWikidata(european_scientists_with_more_publications);

  const scientists = [];
  const publications = [];

  data.forEach(item => {
    scientists.push(item.scientistLabel.value);
    publications.push(parseInt(item.publicationCount.value));
  });

  european_scientists_with_more_publications_chart = drawBarChart(european_scientists_with_more_publications_chart, scientists, publications, "European scrientists with more publications", 'Publications', 'Publications', PIE_CHART_TAG);
 });
 


 
 
 
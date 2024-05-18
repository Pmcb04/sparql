import { drawMap } from '../charts/map_chart.js';
import { univertities_more_olders_europe } from '../queries/wikidata.js';
import { executeQueryWikidata } from '../sparql_endpoint.js';
import { formattedDate } from '../util.js';

const CLASS_NAME = 'universities_more_olders_europe'
const SPARQL_QUERY_TAG = 'sparqlQuery_16'
const PIE_CHART_TAG = 'pieChart_16'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = univertities_more_olders_europe;

  let data = await executeQueryWikidata(univertities_more_olders_europe);

  var locations = [];

  data.forEach(item => {
      locations.push({
          lat: item.latitude.value,
          long: item.longitude.value,
          label: item.universityLabel.value + " (" + formattedDate(item.inception.value) + ")",
      });
    });
  
    var init_coordenates = [0,0];
    var zoom = 5;
  
    drawMap(locations, PIE_CHART_TAG, init_coordenates, zoom);
 });
 


 
 
 
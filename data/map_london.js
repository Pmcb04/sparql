import { drawMap } from '../charts/map_chart.js';
import { map_london } from '../queries.js';
import { executeQueryDBpedia } from '../sparql_endpoint.js';

let map_london_chart = null;

const CLASS_NAME = 'map_london'
const SPARQL_QUERY_TAG = 'sparqlQuery_6'
const PIE_CHART_TAG = 'pieChart_6'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = map_london;

  let data = await executeQueryDBpedia(map_london);

  const locations = [];

  data.forEach(item => {
    locations.push({
        lat: item.lat.value,
        long: item.long.value,
        label: item.placeLabel.value
    });
  });

  var init_coordenates = [0,0];
  var zoom = 10;

  drawMap(locations, PIE_CHART_TAG, init_coordenates, zoom);


});
 


 
 
 
import { drawMap } from '../charts/map_chart.js';
import { monuments_spain } from '../queries/dbpedia.js';
import { executeQueryDBpedia } from '../sparql_endpoint.js';

let monuments_spain_chart = null;

const CLASS_NAME = 'monuments_spain'
const SPARQL_QUERY_TAG = 'sparqlQuery_10'
const PIE_CHART_TAG = 'pieChart_10'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = monuments_spain;

  let data = await executeQueryDBpedia(monuments_spain);

  const locations = [];
  
  data.forEach(item => {
    if(item.lat && item.long && item.monumentLabel){
        locations.push({
            lat: item.lat.value,
            long: item.long.value,
            label: item.monumentLabel.value
        });
    }
  });

  var init_coordenates = [0,0];
  var zoom = 5;

  drawMap(locations, PIE_CHART_TAG, init_coordenates, zoom);


});
 


 
 
 
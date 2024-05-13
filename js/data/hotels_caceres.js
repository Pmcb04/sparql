import { drawMap } from '../charts/map_chart.js';
import { hotels_caceres } from '../queries/openStreetMap.js';
import { executeQueryOSM } from '../sparql_endpoint.js';

let hostal_caceres_chart = null;

const CLASS_NAME = 'hotels_caceres'
const SPARQL_QUERY_TAG = 'sparqlQuery_12'
const PIE_CHART_TAG = 'pieChart_12'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = hotels_caceres;

  let data = await executeQueryOSM(hotels_caceres);

  var locations = [];

  data.elements.forEach(item => {
    if(item.lat && item.lon && item.tags.tourism && item.tags.tourism == "hotel"){
          locations.push({
              lat: item.lat,
              long: item.lon,
              label: item.tags.name
          });
      }
    });
  
    var init_coordenates = [0,0];
    var zoom = 5;
  
    drawMap(locations, PIE_CHART_TAG, init_coordenates, zoom);

});
 


 
 
 
import { drawTable } from '../charts/table.js';
import { historical_people_birthday_spain } from '../queries/wikidata.js';
import { executeQueryWikidata } from '../sparql_endpoint.js';
import { formattedDate } from '../util.js';

let historical_people_birthday_spain_chart = null;

const CLASS_NAME = 'historical_people_birthday_spain'
const SPARQL_QUERY_TAG = 'sparqlQuery_14'
const PIE_CHART_TAG = 'pieChart_14'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = historical_people_birthday_spain;

  let data = await executeQueryWikidata(historical_people_birthday_spain);

  const people = [];
  const birthdates = [];
  
  data.forEach(item => {
    people.push(item.personLabel.value);
    birthdates.push(formattedDate(item.birthdate.value));
  });

  historical_people_birthday_spain_chart = drawTable(people, birthdates, PIE_CHART_TAG);
 });
 


 
 
 
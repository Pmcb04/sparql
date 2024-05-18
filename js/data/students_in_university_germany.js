import { drawBarChart } from '../charts/bar_chart.js';
import { students_in_university_germany } from '../queries/dbpedia.js';
import { executeQueryDBpedia } from '../sparql_endpoint.js';

let students_in_university_germany_chart = null;

const CLASS_NAME = 'students_in_university_germany'
const SPARQL_QUERY_TAG = 'sparqlQuery_13'
const PIE_CHART_TAG = 'pieChart_13'

document.getElementsByClassName(CLASS_NAME)[0].addEventListener('click', async function() {    // SPARQL query to obtain the 10 largest cities in Spain without duplicates

  document.getElementById(SPARQL_QUERY_TAG).innerText = students_in_university_germany;

  let data = await executeQueryDBpedia(students_in_university_germany);

  const universities = [];
  const students = [];

  data.forEach(item => {
    universities.push(item.universityLabel.value);
    students.push(item.numberOfStudents.value);
  });


  drawBarChart(students_in_university_germany_chart, universities, students, "Number of students in the university", 'Students', 'Students', PIE_CHART_TAG)

});
 


 
 
 
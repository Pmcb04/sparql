
import { createRandomColor } from '../util.js';

export function drawPieChart(chart, labels, data, dataName, legendPosition, chartTag) {

    const backgroundColors = labels.map(() => createRandomColor());
  
    const ctx = document.getElementById(chartTag).getContext('2d');
    chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: dataName,
          data: data,
          backgroundColor: backgroundColors,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: dataName
        },
        plugins: {
          legend: {
            display: true,
            position: legendPosition
          }
        }
      }
    });

    return chart;
  }
  
  
  
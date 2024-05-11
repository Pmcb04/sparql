import { createRandomColor } from '../util.js';


export function drawLineChart(chart, labels, data, charTitle, chartTag) {
    var ctx = document.getElementById(chartTag).getContext('2d');

    const backgroundColors = labels.map(() => createRandomColor());


    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: charTitle,
                data: data,
                backgroundColor: backgroundColors, // Color del área bajo la línea
                borderColor: backgroundColors, // Color de la línea
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
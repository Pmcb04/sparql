import { createRandomColor } from '../util.js';


export function drawBarChart(chart, labels, data, chartTitle, xAxisLabel, yAxisLabel, chartTag) {
    
    const backgroundColors = labels.map(() => createRandomColor());


    var ctx = document.getElementById(chartTag).getContext('2d');
    
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: xAxisLabel,
                data: data,
                backgroundColor: backgroundColors,
                borderColor: backgroundColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: xAxisLabel
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: yAxisLabel
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: chartTitle
            }
        }
    });
}

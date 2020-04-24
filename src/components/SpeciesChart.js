import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { dynamicColors, parseValue } from '../services/utils'

function SpeciesChart({data, xAxis, yAxis, label, miscLabel}) {
    let chartData = {
        labels: ['Scatter'],
        datasets: []
    };

    data.forEach(item=>{
        const color = dynamicColors();
        chartData.datasets.push({
            label: item[label],
            miscLabel: item[miscLabel],
            backgroundColor: color,
            pointBorderColor: color,
            pointBackgroundColor: color,
            pointRadius: 4,
            data: [{ x: parseValue(item[xAxis]), y: parseValue(item[yAxis]) }]
        })
    });

    return (
        <Scatter
            data={chartData}
            options={{ 
                maintainAspectRatio: true,
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var label = data.datasets[tooltipItem.datasetIndex].label || '';
                            var miscLabel = data.datasets[tooltipItem.datasetIndex].miscLabel || '';
                            var xLabel = Math.round(tooltipItem.xLabel * 100) / 100;
                            var yLabel = Math.round(tooltipItem.yLabel * 100) / 100;
                            if (label) {
                                label += ' - ' + miscLabel;
                                label += ': ';
                            }
                            label += '( ' + xLabel + ', '+ yLabel + ' )';
                            return label;
                        }
                    }
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                        display: true,
                        labelString: xAxis.toUpperCase()
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                        display: true,
                        labelString: yAxis.toUpperCase()
                        }
                    }],
                    }
            }}
        />
    )
}

export default SpeciesChart;
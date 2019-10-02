$(function() {
    $('.graph-left').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Control Failures by Devices ( Top 5 )'
        },
        xAxis: {
            categories: ['DST', 'SSG20_Internal', 'CustFW1', 'DD-MGMT_Management_Server', 'MSF-FDR-CMA']
        },
        yAxis: {
            min: 0,
            max: 12
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Critical',
            data: [0, 4, 1, 1, 1]
        }, {
            name: 'High',
            data: [0, 1, 0, 1, 1]
        }, {
            name: 'Medium',
            data: [0, 4, 2, 1, 0]
        }, {
            name: 'Low',
            data: [2, 3, 3, 4, 4]
        }]
    }, function(chart) { // on complete
        /* generating rectangle for title background */
        chart.renderer.rect(100, 100, 920, 45, 5)
            .attr({
                'stroke-width': 2,
                fill: '#f5f5f5',
                zIndex: 2,
                x: 0,
                y: -6,
            })
            .add();
    });
});

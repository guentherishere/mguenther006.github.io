$(function() {
    $('.graph-right').highcharts({
            chart: {
                type: 'spline'
            },
            legend: {
                align: 'left',
                x: 30
            },
            title: {
                text: 'Configuration Assessment SCI Scoring ( 30 Day History )'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                    day: '%e. %b'
                },
                labels: {
                  rotation: -45,
                  /* need to write custom function for dat/month display */
                  // formatter: function() {
                  //   var dateArray = this.axis.series[0].xData;
                  //     console.log(dateArray);
                  // }
                },
                gridLineWidth: 1
            },
            yAxis: {
                allowDecimals: false,
                max: 10,
                labels: {
                    /* have to add this to hide the zero value on the y axis */
                    formatter: function() {
                        if (this.value !== 0) {
                            return this.value;
                        }
                    }
                },
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
            },
            series: [{
                name: 'DB Best Practices',
                // Define the data points. All series have a dummy year
                // of 1970/71 in order to be compared on the same x axis. Note
                // that in JavaScript, months start at 0 for January, 1 for February etc.
                data: [
                    [Date.UTC(1970, 7, 25), 6.5],
                    [Date.UTC(1970, 7, 26), 6.75],
                    [Date.UTC(1970, 7, 27), 7],
                    [Date.UTC(1970, 7, 28), 7],
                    [Date.UTC(1970, 7, 29), 6.75],
                    [Date.UTC(1970, 7, 30), 6.5],
                    [Date.UTC(1970, 7, 31), 6.25],
                    [Date.UTC(1970, 8, 1), 6.5],
                    [Date.UTC(1970, 8, 2), 6.75],
                    [Date.UTC(1970, 8, 3), 6.8],
                    [Date.UTC(1970, 8, 4), 7],
                    [Date.UTC(1970, 8, 5), 6.8],
                    [Date.UTC(1970, 8, 6), 6.8],
                    [Date.UTC(1970, 8, 7), 6.8],
                    [Date.UTC(1970, 8, 8), 6.8],
                    [Date.UTC(1970, 8, 9), 6.7],
                    [Date.UTC(1970, 8, 10), 6.7],
                    [Date.UTC(1970, 8, 11), 6.8],
                    [Date.UTC(1970, 8, 12), 6.8],
                    [Date.UTC(1970, 8, 13), 6.5],
                    [Date.UTC(1970, 8, 14), 6.3],
                    [Date.UTC(1970, 8, 15), 6.2],
                    [Date.UTC(1970, 8, 16), 5.9],
                    [Date.UTC(1970, 8, 17), 5.75],
                    [Date.UTC(1970, 8, 18), 6.25],
                    [Date.UTC(1970, 8, 19), 6.25],
                    [Date.UTC(1970, 8, 20), 6.45],
                    [Date.UTC(1970, 8, 21), 6.45],
                    [Date.UTC(1970, 8, 22), 6.5],
                    [Date.UTC(1970, 8, 23), 6.6]
                ],
                color: '#73CE9B'
            }, {
                name: 'SecureCo Best Practices',
                data: [
                    [Date.UTC(1970, 7, 25), 0],
                    [Date.UTC(1970, 7, 26), 5.9],
                    [Date.UTC(1970, 7, 27), 5.8],
                    [Date.UTC(1970, 7, 28), 5.8],
                    [Date.UTC(1970, 7, 29), 5.9],
                    [Date.UTC(1970, 7, 30), 5.9],
                    [Date.UTC(1970, 7, 31), 5.9],
                    [Date.UTC(1970, 8, 1), 6],
                    [Date.UTC(1970, 8, 2), 5.98],
                    [Date.UTC(1970, 8, 3), 5.8],
                    [Date.UTC(1970, 8, 4), 5.7],
                    [Date.UTC(1970, 8, 5), 5.6],
                    [Date.UTC(1970, 8, 6), 5.7],
                    [Date.UTC(1970, 8, 7), 5.7],
                    [Date.UTC(1970, 8, 8), 5.8],
                    [Date.UTC(1970, 8, 9), 5.9],
                    [Date.UTC(1970, 8, 10), 5.8],
                    [Date.UTC(1970, 8, 11), 5.8],
                    [Date.UTC(1970, 8, 12), 5.8],
                    [Date.UTC(1970, 8, 13), 5.7],
                    [Date.UTC(1970, 8, 14), 5.7],
                    [Date.UTC(1970, 8, 15), 5.6],
                    [Date.UTC(1970, 8, 16), 5.5],
                    [Date.UTC(1970, 8, 17), 6],
                    [Date.UTC(1970, 8, 18), 5.8],
                    [Date.UTC(1970, 8, 19), 5.8],
                    [Date.UTC(1970, 8, 20), 5.9],
                    [Date.UTC(1970, 8, 21), 5.9],
                    [Date.UTC(1970, 8, 22), 5.95],
                    [Date.UTC(1970, 8, 23), 6]
                ],
                color: '#49aadc'
            }, {
                name: 'Best Practices',
                data: [
                    [Date.UTC(1970, 7, 25), 0],
                    [Date.UTC(1970, 7, 26), 1.9],
                    [Date.UTC(1970, 7, 27), 1.8],
                    [Date.UTC(1970, 7, 28), 1.8],
                    [Date.UTC(1970, 7, 29), 1.9],
                    [Date.UTC(1970, 7, 30), 1.9],
                    [Date.UTC(1970, 7, 31), 1.9],
                    [Date.UTC(1970, 8, 1), 2],
                    [Date.UTC(1970, 8, 2), 1.98],
                    [Date.UTC(1970, 8, 3), 1.8],
                    [Date.UTC(1970, 8, 4), 1.7],
                    [Date.UTC(1970, 8, 5), 1.6],
                    [Date.UTC(1970, 8, 6), 1.5],
                    [Date.UTC(1970, 8, 7), 1.4],
                    [Date.UTC(1970, 8, 8), 2],
                    [Date.UTC(1970, 8, 9), 1.75],
                    [Date.UTC(1970, 8, 10), 1.6],
                    [Date.UTC(1970, 8, 11), 1.6],
                    [Date.UTC(1970, 8, 12), 1.6],
                    [Date.UTC(1970, 8, 13), 1.7],
                    [Date.UTC(1970, 8, 14), 1.7],
                    [Date.UTC(1970, 8, 15), 1.6],
                    [Date.UTC(1970, 8, 16), 1.5],
                    [Date.UTC(1970, 8, 17), 2],
                    [Date.UTC(1970, 8, 18), 1.8],
                    [Date.UTC(1970, 8, 19), 1.8],
                    [Date.UTC(1970, 8, 20), 1.9],
                    [Date.UTC(1970, 8, 21), 1.9],
                    [Date.UTC(1970, 8, 22), 1.95],
                    [Date.UTC(1970, 8, 23), 2]
                ],
                color: '#fdc062'
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
            /* generating squares for the custom legend */
            chart.renderer.rect(100, 100, 16, 16, 0)
                .attr({
                    'stroke-width': 2,
                    fill: '#C1DF96',
                    zIndex: 7,
                    x: 48,
                    y: 366,
                })
                .add();

            chart.renderer.rect(100, 100, 16, 16, 0)
                .attr({
                    'stroke-width': 2,
                    fill: '#79C1E5',
                    zIndex: 7,
                    x: 186,
                    y: 366,
                })
                .add();

            chart.renderer.rect(100, 100, 16, 16, 0)
                .attr({
                    'stroke-width': 2,
                    fill: '#E5E6B2',
                    zIndex: 7,
                    x: 362,
                    y: 366,
                })
                .add();

        }

    );
});

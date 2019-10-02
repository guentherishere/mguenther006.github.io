/**
 * SecureCo Theme Highcharts JS
 * @author Matt Guenther
 * notes:
 *  -Had a hard time aligning the Legend text with the legend symbol
 *  -Font need to be more bold for labels. Suspecting Raleway 500 should be used
*   -(Top 5) in title needs to be smaller
 */

// Load the fonts
Highcharts.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Raleway',
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
    colors: ["rgba(245,144,106,0.85)", "rgba(225,226,165,0.85)", "rgba(98,183,225,0.85)", "rgba(183,218,132,0.85)", "#aaeeee", "#ff0066", "#eeaaee",
        "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"
    ],
    chart: {
        backgroundColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 1,
                y2: 1
            },
            stops: [
                [0, '#ffffff']
            ]
        },
        style: {
            fontFamily: "'Raleway', sans-serif"
        },
        plotBorderColor: '#606063'
    },
    title: {
      margin: 45,
      y: 15,
      align: 'left',
        style: {
            color: '#231F20',
              fontSize: '17',
              fontWeight: '500'
        }
    },
    xAxis: {
        gridLineColor: '#e2e2e2',
        labels: {
            style: {
                color: '#231F20'
            }
        },
        lineColor: '#e2e2e2',
        minorGridLineColor: '#505053',
        tickColor: '#ff0000',
        tickLength: '0',
        tickWidth: '0',
        title: {
            style: {
                color: '#A0A0A3'

            }
        }
    },
    yAxis: {
        gridLineColor: '#e2e2e2',
        labels: {
            style: {
                color: '#231F20'
            }
        },
        lineColor: '#e2e2e2',
        lineWidth: '1',
        minorGridLineColor: '#505053',
        tickColor: '#ff0000',
        tickLength: '0',
        tickWidth: '0',
        title: {
            style: {
                display: 'none'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        bar: {
          pointWidth : '40',
          borderWidth: 0,
        },
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: null //inherit from the series color
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        spline: {
            marker: {
                enabled: true,
                fillColor: '#ffffff',
                lineColor: null, //inherit from the series color
                lineWidth: 2,
                symbol: 'circle'
            },
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        align: 'left',
        symbolHeight: '16',
        x: 170,
        itemStyle: {
            color: '#231F20',
            fontWeight: '500'
        },
        itemHoverStyle: {
            color: '#606063'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },

    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },

    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },

    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },

    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },

    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },

    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

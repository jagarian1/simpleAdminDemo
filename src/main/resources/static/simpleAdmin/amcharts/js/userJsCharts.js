// function ready() {
window.onload = function() {
    console.log("0. DOM이 준비되었습니다!");

    // 이미지가 로드되지 않은 상태이기 때문에 사이즈는 0x0입니다.
    //console.log(`이미지 사이즈: ${img.offsetWidth}x${img.offsetHeight}`);
  };

//   document.addEventListener("DOMContentLoaded", ready);

// window.addEventListener('DOMContentLoaded', function() {
//     //실행 코드
//     console.log("window.addEventListener 를 사용해도 됩니다.");
// });

    console.log("onLoadComplate !");


    /* ganttChartdiv */
    var chart = AmCharts.makeChart("ganttChartdiv", {
        "type": "gantt",
        "period": "DD",

        "valueAxis": {
            "type": "date"
        },
        "brightnessStep": 100,
        "graph": {
            "fillAlphas": 1,
            "balloonText": "[[open]] - [[value]]"
        },
        "rotate": true,
        "categoryField": "category",
        "segmentsField": "segments",
        "dataDateFormat": "YYYY-MM-DD",
        "startDateField": "start",
        "endDateField": "end",
        "dataProvider": [{
            "category": "John",
            "segments": [{
                "start": "2015-01-02",
                "end": "2015-01-03"
            }, {
                "start": "2015-01-04",
                "end": "2015-01-05"
            }, {
                "start": "2015-01-07",
                "end": "2015-01-10"
            }]
        }, {
            "category": "Smith",
            "segments": [{
                "start": "2015-01-01",
                "end": "2015-01-02"
            }, {
                "start": "2015-01-10",
                "end": "2015-01-15"
            }]
        }, {
            "category": "Ben",
            "segments": [{
                "start": "2015-01-06",
                "end": "2015-01-09"
            }, {
                "start": "2015-01-11",
                "end": "2015-01-18"
            }, {
                "start": "2015-01-22",
                "end": "2015-01-21"
            }]
        }],
        "chartCursor": {
            "valueBalloonsEnabled": false,
            "cursorAlpha": 100,
            "valueLineBalloonEnabled": true,
            "valueLineEnabled": true,
            "valueZoomable":true,
            "zoomable":false
        },

        "valueScrollbar": {
            "position":"top",
            "autoGridCount":true,
            "color":"#000000"
        }
    });

    /* serialChartdiv */
    AmCharts.makeChart("serialChartdiv", {
    type: "serial",
    theme: "dark",
    dataProvider: [
        {
        year: 2005,
        income: 23.5,
        expenses: 18.1,
        },
        {
        year: 2006,
        income: 26.2,
        expenses: 22.8,
        },
        {
        year: 2007,
        income: 30.1,
        expenses: 23.9,
        },
        {
        year: 2008,
        income: 29.5,
        expenses: 25.1,
        },
        {
        year: 2009,
        income: 24.6,
        expenses: 25,
        },
    ],
    categoryField: "year",
    startDuration: 1,
    rotate: true,

    categoryAxis: {
        gridPosition: "start",
    },
    valueAxes: [
        {
        position: "top",
        title: "Million USD",
        minorGridEnabled: true,
        },
    ],
    graphs: [
        {
        type: "column",
        title: "Income",
        valueField: "income",
        fillAlphas: 1,
        balloonText:
            "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
        },
        {
        type: "line",
        title: "Expenses",
        valueField: "expenses",
        lineThickness: 2,
        bullet: "round",
        balloonText:
            "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
        },
    ],
    legend: {
        useGraphSettings: true,
    },

    creditsPosition: "top-right",
    });

    /* regularStackChart */
    var regularStackChartData = [{
        "year": 2000,
            "cars": 1587,
            "motorcycles": 650,
            "bicycles": 121
    }, {
        "year": 1995,
            "cars": 1567,
            "motorcycles": 683,
            "bicycles": 146
    }, {
        "year": 1996,
            "cars": 1617,
            "motorcycles": 691,
            "bicycles": 138
    }, {
        "year": 1997,
            "cars": 1630,
            "motorcycles": 642,
            "bicycles": 127
    }, {
        "year": 1998,
            "cars": 1660,
            "motorcycles": 699,
            "bicycles": 105
    }, {
        "year": 1999,
            "cars": 1683,
            "motorcycles": 721,
            "bicycles": 109
    }, {
        "year": 2000,
            "cars": 1691,
            "motorcycles": 737,
            "bicycles": 112
    }, {
        "year": 2001,
            "cars": 1298,
            "motorcycles": 680,
            "bicycles": 101
    }, {
        "year": 2002,
            "cars": 1275,
            "motorcycles": 664,
            "bicycles": 97
    }, {
        "year": 2003,
            "cars": 1246,
            "motorcycles": 648,
            "bicycles": 93
    }, {
        "year": 2004,
            "cars": 1218,
            "motorcycles": 637,
            "bicycles": 101
    }, {
        "year": 2005,
            "cars": 1213,
            "motorcycles": 633,
            "bicycles": 87
    }, {
        "year": 2006,
            "cars": 1199,
            "motorcycles": 621,
            "bicycles": 79
    }, {
        "year": 2007,
            "cars": 1110,
            "motorcycles": 210,
            "bicycles": 81
    }, {
        "year": 2008,
            "cars": 1165,
            "motorcycles": 232,
            "bicycles": 75
    }, {
        "year": 2009,
            "cars": 1145,
            "motorcycles": 219,
            "bicycles": 88
    }, {
        "year": 2010,
            "cars": 1163,
            "motorcycles": 201,
            "bicycles": 82
    }, {
        "year": 2011,
            "cars": 1180,
            "motorcycles": 285,
            "bicycles": 87
    }, {
        "year": 2012,
            "cars": 1159,
            "motorcycles": 277,
            "bicycles": 71
    }];

    AmCharts.makeChart("regularStackChartdiv", {
        type: "serial",
        dataProvider: regularStackChartData,
        marginTop: 10,
        categoryField: "year",
        categoryAxis: {
            gridAlpha: 0.07,
            axisColor: "#DADADA",
            startOnAxis: true,
            guides: [{
                category: "2001",
                lineColor: "#CC0000",
                lineAlpha: 1,
                dashLength: 2,
                inside: true,
                labelRotation: 90,
                label: "fines for speeding increased"
            }, {
                category: "2007",
                lineColor: "#CC0000",
                lineAlpha: 1,
                dashLength: 2,
                inside: true,
                labelRotation: 90,
                label: "motorcycle maintenance fee introduced"
            }]
        },
        valueAxes: [{
            stackType: "regular",
            gridAlpha: 0.07,
            title: "Traffic incidents"
        }],

        graphs: [{
            type: "line",
            title: "Cars",
            hidden: true,
            valueField: "cars",
            lineAlpha: 0,
            fillAlphas: 0.6,
            balloonText: "<img src='images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>"
        }, {
            type: "line",
            title: "Motorcycles",
            valueField: "motorcycles",
            lineAlpha: 0,
            fillAlphas: 0.6,
            balloonText: "<img src='images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>"
        }, {
            type: "line",
            title: "Bicycles",
            valueField: "bicycles",
            lineAlpha: 0,
            fillAlphas: 0.6,
            balloonText: "<img src='images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>"
        }],
        legend: {
            position: "bottom",
            valueText: "[[value]]",
            valueWidth: 100,
            valueAlign: "left",
            equalWidths: false,
            periodValueText: "total: [[value.sum]]"
        },
        chartCursor: {
            cursorAlpha: 0
        },
        chartScrollbar: {
            color: "FFFFFF"
        }

    });



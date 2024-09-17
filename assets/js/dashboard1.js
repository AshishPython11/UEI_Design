$(function () {
    "use strict";




// chart 1

var options = {
    series: [78],
    chart: {
        height: 180,
        type: 'radialBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -115,
            endAngle: 115,
            hollow: {
                margin: 0,
                size: '80%',
                background: 'transparent',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                    enabled: false,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                }
            },
            track: {
                background: 'rgba(0, 0, 0, 0.1)',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: false,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                }
            },

            dataLabels: {
                show: true,
                name: {
                    offsetY: -10,
                    show: false,
                    color: '#888',
                    fontSize: '17px'
                },
                value: {
                    offsetY: 10,
                    color: '#111',
                    fontSize: '24px',
                    show: true,
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ffd200'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    colors: ["#ee0979"],
    stroke: {
        lineCap: 'round'
    },
    labels: ['Total Orders'],
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();




 // chart 2

 var options = {
    series: [{
        name: "Net Sales",
        data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
    }],
    chart: {
        //width:150,
        height: 105,
        type: 'area',
        sparkline: {
            enabled: !0
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#0866ff'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.5,
            opacityTo: 0.0,
            //stops: [0, 100, 100, 100]
        },
    },

    colors: ["#02c27a"],
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function (e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();







    
    // chart 5

    var options = {
        series: [{
            name: "Desktops",
            data: [14, 41, 35, 51, 25, 18, 21]
        }],
        chart: {
            foreColor: "#9ba7b2",
            height: 280,
            type: 'bar',
            toolbar: {
                show: !1
            },
            sparkline: {
                enabled: !1
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1,
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 4,
                borderRadiusApplication: 'around',
                borderRadiusWhenStacked: 'last',
                columnWidth: '45%',
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#009efd'],
                shadeIntensity: 1,
                type: 'vertical',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        colors: ["#2af598"],
        grid: {
            show: true,
            borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        tooltip: {
            theme: "dark",
            marker: {
                show: !1
            }
        },
    };

    var chart = new ApexCharts(document.querySelector("#chart5"), options);
    chart.render();



    






 // chart 8

 var options = {
    series: [{
        name: "Total Sales",
        data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
    }],
    chart: {
        //width:150,
        height: 210,
        type: 'area',
        sparkline: {
            enabled: !0
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'straight'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#17ad37'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.7,
            opacityTo: 0.0,
            //stops: [0, 100, 100, 100]
        },
    },
    colors: ["#98ec2d"],
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function (e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    },
    markers: {
        show: !1,
        size: 5,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};

var chart = new ApexCharts(document.querySelector("#chart8"), options);
chart.render();






});
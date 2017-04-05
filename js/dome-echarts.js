// 空气湿度
var myChart01 = echarts.init(document.getElementById('chart01'));
var option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    toolbox: {
        feature: {
            dataView: {
                readOnly: true
            },
            magicType: {
                type: ["line", "bar"],
                show: false
            }
        }
    },
    calculable: false,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["2.01", "2.10", "2.20", "3.01", "3.10", "3.20", "4.01", "4.10", "4.20", "5.01"],
            name: "时间",
            nameLocation: "end"
        }
    ],
    yAxis: [
        {
            type: "value",
            name: "温度"
        }
    ],
    series: [
        {
            name: "温度",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10, 13, 20, 23],
            smooth: true
        }
    ]
};
// 为echarts对象加载数据
myChart01.setOption(option);

// 空气湿度数据
var myChart02 = echarts.init(document.getElementById('chart02'));
var option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    toolbox: {
        feature: {
            dataView: {
                readOnly: true
            },
            magicType: {
                type: ["line", "bar"],
                show: false
            }
        }
    },
    calculable: false,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["2.01", "2.10", "2.20", "3.01", "3.10", "3.20", "4.01", "4.10", "4.20", "5.01"],
            name: "时间",
            nameLocation: "end"
        }
    ],
    yAxis: [
        {
            type: "value",
            name: "湿度",
            nameLocation: "end"
        }
    ],
    series: [
        {
            name: "空气湿度",
            type: "line",
            data: [83, 90, 89, 78, 87, 89, 78, 76, 70, 60],
            smooth: true
        }
    ]
};
// 为echarts对象加载数据
myChart02.setOption(option);

// 大气气压
var myChart03 = echarts.init(document.getElementById('chart03'));
var option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    toolbox: {
        feature: {
            dataView: {
                readOnly: true
            },
            magicType: {
                type: ["line", "bar"],
                show: false
            }
        }
    },
    calculable: false,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["2.01", "2.10", "2.20", "3.01", "3.10", "3.20", "4.01", "4.10", "4.20", "5.01"],
            name: "时间",
            nameLocation: "end"
        }
    ],
    yAxis: [
        {
            type: "value",
            name: "(hPa)",
            nameLocation: "end"
        }
    ],
    series: [
        {
            name: "压强",
            type: "line",
            data: [983, 890, 989, 978, 987, 989, 1078, 976, 970, 960],
            smooth: true
        }
    ]
};
// 为echarts对象加载数据
myChart03.setOption(option);

// 污染物
var myChart04 = echarts.init(document.getElementById('chart04'));
var option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    legend: {
        data: ["SO2", "NO2", "CO"],
        selectedMode: "multiple",
        x: "center",
        y: "bottom"
    },
    toolbox: {
        feature: {
            dataView: {
                readOnly: true
            },
            magicType: {
                type: ["line", "bar"],
                show: false
            }
        }
    },
    calculable: false,
    xAxis: [
        {
            type: "category",
            data: ["2.01", "2.10", "2.20", "3.01", "3.10", "3.20", "4.01", "4.10", "4.20", "5.01"],
            position: "bottom",
            name: "时间",
            nameLocation: "end"
        }
    ],
    yAxis: [
        {
            type: "value",
            name: "含量(μg/m³)",
            nameLocation: "end"
        }
    ],
    series: [
        {
            name: "SO2",
            type: "bar",
            data: [44, 24, 43, 50, 46, 30, 20, 10, 24, 30]
        },
        {
            type: "bar",
            name: "NO2",
            data: [50, 30, 43, 48, 50, 34, 24, 9, 28, 41]
        },
        {
            type: "bar",
            name: "CO",
            data: [83, 90, 89, 78, 87, 89, 78, 76, 70, 60]
        }
    ]
};
// 为echarts对象加载数据
myChart04.setOption(option);

// 日出日落时间
var myChart05 = echarts.init(document.getElementById('chart05'));
var option = {
    legend: {
        data: ["日出", "日落"],
        y: "bottom"
    },
    toolbox: {
        show: false,
        feature: {
            dataView: {
                readOnly: true
            },
            magicType: {
                type: ["line", "bar"],
                show: false
            }
        }
    },
    calculable: false,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["2.10", "2.20", "3.01", "3.10", "3.20", "4.01", "4.10", "4.20", "5.01"],
            name: "日期",
            nameLocation: "end"
        }
    ],
    yAxis: [
        {
            type: "value",
            name: "时间",
            nameLocation: "end"
        }
    ],
    series: [
        {
            name: "日出",
            type: "line",
            data: [7.3, 7.1, 7.01, 7.01, 7.1, 7.01, 6.5, 6.4, 6.3],
            smooth: true
        },
        {
            name: "日落",
            type: "line",
            data: [18.35, 18.3, 18.21, 18.11, 18.22, 18.35, 18.3, 18.4, 18.38],
            smooth: true
        }
    ],
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    }
};
// 为echarts对象加载数据
myChart05.setOption(option);
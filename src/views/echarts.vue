<template>
    <div class="Wecharts">
        <Wchart ref="chart1" :options="chart1" :auto-resize="true" class="echartsCon" />
        <Wchart ref="chart2" :options="chart2" :auto-resize="true" class="echartsCon" />
        <Wchart ref="chart3" :options="chart3" :auto-resize="true" class="echartsCon" />
        <Wchart ref="chart4" :options="chart4" :auto-resize="true" class="echartsCon" />
    </div>
</template>
<script>
export default {
    name:'Wecharts',
    data(){
        return {
            chart1: {},
            chart2: {},
            chart3: {},
            chart4: {},
        }
    },
    mounted(){
        this.Wchart1();
        this.Wchart2();
        this.Wchart3();
        this.Wchart4();
    },
    methods:{
        Wchart1(){
            this.chart1 = {
                title: {
                    text: '堆叠区域图'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        areaStyle: {},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {},
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {},
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: {normal: {}},
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
        },
        Wchart2(){
            var xAxisData = [];
            var data1 = [];
            var data2 = [];
            for (var i = 0; i < 100; i++) {
                xAxisData.push('类目' + i);
                data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
                data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
            }

            this.chart2 = {
                title: {
                    text: '柱状图动画延迟'
                },
                legend: {
                    data: ['bar', 'bar2'],
                    align: 'left'
                },
                toolbox: {
                    // y: 'bottom',
                    feature: {
                        magicType: {
                            type: ['stack', 'tiled']
                        },
                        dataView: {},
                        saveAsImage: {
                            pixelRatio: 2
                        }
                    }
                },
                tooltip: {},
                xAxis: {
                    data: xAxisData,
                    silent: false,
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                },
                series: [{
                    name: 'bar',
                    type: 'bar',
                    data: data1,
                    animationDelay: function (idx) {
                        return idx * 10;
                    }
                }, {
                    name: 'bar2',
                    type: 'bar',
                    data: data2,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                }],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) {
                    return idx * 5;
                }
            };
        },
        Wchart3(){
            var data = [{
            name: 'Grandpa',
            children: [{
                name: 'Uncle Leo',
                value: 15,
                children: [{
                    name: 'Cousin Jack',
                    value: 2
                }, {
                    name: 'Cousin Mary',
                    value: 5,
                    children: [{
                        name: 'Jackson',
                        value: 2
                    }]
                }, {
                    name: 'Cousin Ben',
                    value: 4
                }]
            }, {
                name: 'Aunt Jane',
                children: [{
                    name: 'Cousin Kate',
                    value: 4
                }]
            }, {
                name: 'Father',
                value: 10,
                children: [{
                    name: 'Me',
                    value: 5,
                    itemStyle: {
                        color: 'red'
                    }
                }, {
                    name: 'Brother Peter',
                    value: 1
                }]
            }]
        }, {
            name: 'Mike',
            children: [{
                name: 'Uncle Dan',
                children: [{
                    name: 'Cousin Lucy',
                    value: 3
                }, {
                    name: 'Cousin Luck',
                    value: 4,
                    children: [{
                        name: 'Nephew',
                        value: 2
                    }]
                }]
            }]
        }, {
            name: 'Nancy',
            children: [{
                name: 'Uncle Nike',
                children: [{
                    name: 'Cousin Betty',
                    value: 1
                }, {
                    name: 'Cousin Jenny',
                    value: 2
                }]
            }]
        }];

        this.chart3 = {
            visualMap: {
                type: 'continuous',
                min: 0,
                max: 10,
                inRange: {
                    color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
                }
            },
            series: {
                type: 'sunburst',
                data: data,
                radius: [0, '90%'],
                label: {
                    rotate: 'radial'
                }
            }
        };
        },
        Wchart4(){
            this.chart4 = {
                angleAxis: {
                },
                radiusAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四'],
                    z: 10
                },
                polar: {
                },
                series: [{
                    type: 'bar',
                    data: [1, 2, 3, 4],
                    coordinateSystem: 'polar',
                    name: 'A',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [2, 4, 6, 8],
                    coordinateSystem: 'polar',
                    name: 'B',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [1, 2, 3, 4],
                    coordinateSystem: 'polar',
                    name: 'C',
                    stack: 'a'
                }],
                legend: {
                    show: true,
                    data: ['A', 'B', 'C']
                }
            };

        }
    }
}
</script>
<style lang="less" scoped>
.Wecharts{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // width: 100%;
    .echartsCon{
        width: 48%;
        height: 400px;
    }
}
</style>

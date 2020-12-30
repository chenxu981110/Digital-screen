import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  
export class AppComponent implements OnInit {
  title = 'screen1';
  public xAxis = [];
  //表一
  public production = [];
  //表二
  public yusuan = [];
  public firstHalf = [];
  public secondHalf = [];
  //表三
  public work = [];
  public xAxis1 = [];
  //表四
  public save = [];
  public consumption = [];
  public enter = [];
//表五
  public yAxis = [];
  public target = [];
  public complete = [];

//时间表
  week: any;
  date: any;
  time: any;
  days: any;
    constructor(private http: HttpClient) {
        //时间
        timer(0, 1000).subscribe(
            () => {
                var times: any = new Date();
                var h: any = times.getHours();
                var m: any = times.getMinutes();
                var s: any = times.getSeconds();
                this.time = h + ":" + m + ":" + s;
            }
        )
  
        //星期
        var now: any = new Date();
        var day: any = now.getDay();
        var weeks: any = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        this.week = weeks[day];
        console.log(this.week);
        //日期
        var dates: any = new Date();
        var y: any = dates.getFullYear();
        var m: any = dates.getMonth() + 1;
        var d: any = dates.getDate();
        this.date = y + "-" + m + "-" + d;
        console.log(this.date);

 //安全生产天数
         var date1 = '2020/9/28';  //开始时间
        var date2 = new Date();    //结束时间
        var date3 = date2.getTime() - new Date(date1).getTime();   //时间差的毫秒数      
        //计算出相差天数
        var days = Math.floor(date3 / (24 * 3600 * 1000))
        console.log(" 相差 " + days)
        this.days = days;
        
        
        
    }

ngOnInit(): void {
   //表一
   timer(0, 2000).subscribe(
      () => {
        this.http.get('http://localhost:3000/chart1/001/8', {}).subscribe(
          (value: any) => {
            if (value && value.data1 && value.data1.length) {
              let i = value.data1.length - 1;
              for (let item of value.data1) {
                const d = new Date(Number(item.time));
                this.xAxis[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                this.xAxis[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                this.xAxis[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                this.production[i] = (item.production);
            
                i--;
              }
              this.updateOption1 = {
                xAxis: [
                  {
                    data: this.xAxis
                  }
                ],
                series: [{
                  data: this.production
                }]
              }
            }
          }
        )
      }
   );
    //表二
   timer(0, 2000).subscribe(
      () => {
        this.http.get('http://localhost:3000/chart2/001/4', {}).subscribe(
          (value: any) => {
            if (value && value.data2 && value.data2.length) {
              let j = value.data2.length - 1;
              for (let item1 of value.data2) {
                const d = new Date(Number(item1.time));
                this.xAxis1[j] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                this.xAxis1[j] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                this.xAxis1[j] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                this.yusuan[j] = (item1.yusuan);
                this.firstHalf[j] = (item1.firstHalf);
                this.secondHalf[j] = (item1.secondHalf);
               
            
                j--;
              }
              this.updateOption2 = {
                xAxis: [
                  {
                    data: this.xAxis1
                  }
                ],
                series: [{
                  data: this.yusuan
                },
                  {
                    data: this.firstHalf
                  },
                {
                  data: this.secondHalf
                }]
              }
            }
          }
        )
      }
   );
    //表三
   timer(0, 2000).subscribe(
      () => {
        this.http.get('http://localhost:3000/chart3/001/8', {}).subscribe(
          (value: any) => {
            if (value && value.data3 && value.data3.length) {
              let K = value.data3.length - 1;
              for (let item2 of value.data3) {
                const d = new Date(Number(item2.time));
                this.xAxis[K] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                this.xAxis[K] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                this.xAxis[K] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                this.work[K] = (item2.work);
          
               
            
                K--;
              }
              this.updateOption3 = {
                xAxis: [
                  {
                    data: this.xAxis
                  }
                ],
                series: [{
                  data: this.work
                }]
              }
            }
          }
        )
      }
   );
    //表四
     timer(0, 2000).subscribe(
      () => {
        this.http.get('http://localhost:3000/chart4/001/8', {}).subscribe(
          (value: any) => {
            if (value && value.data4 && value.data4.length) {
              let L = value.data4.length - 1;
              for (let item3 of value.data4) {
                const d = new Date(Number(item3.time));
                this.xAxis[L] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                this.xAxis[L] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                this.xAxis[L] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                this.save[L] = (item3.save);
                this.consumption[L] = (item3.consumption);
                this.enter[L] = (item3.enter);
          
               
            
                L--;
              }
              this.updateOption4 = {
                xAxis: [
                  {
                    data: this.xAxis
                  }
                ],
                series: [{
                  data: this.save
                },
                {
                  data: this.consumption
                  },
                {
                  data: this.enter
                }]
              }
            }
          }
        )
      }
    ); 
       //表五
     timer(0, 2000).subscribe(
      () => {
        this.http.get('http://localhost:3000/chart5/001/5', {}).subscribe(
          (value: any) => {
            if (value && value.data5 && value.data5.length) {
              let M = value.data5.length - 1;
              for (let item4 of value.data5) {
                const d = new Date(Number(item4.time));
                this.yAxis[M] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                this.yAxis[M] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                this.yAxis[M] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                this.target[M] = (item4.target);
                this.complete[M] = (item4.complete);
          
               
            
                M--;
              }
              this.updateOption5 = {
                series: [{
                  data: this.target
                },
                {
                  data: this.complete
                }]
              }
            }
          }
        )
      }
    ); 
}

option1 = {
   backgroundColor: 'rgba(3, 0, 28, 0.75)',
    color: ['#0C75EB'],
    title: {
        text: '活性炭的生产指标',
        padding: 14,
        textStyle: {
            color: '#ffffff',
            fontSize: 13,
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: this.xAxis,
            axisTick: {
                alignWithLabel: true,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',//坐标轴颜色
                    fontSize: 10
                }

            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: { show: false },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',//坐标轴颜色
                    fontSize: 8
                }

            }
        }
    ],
    series: [
        {
            name: '活性炭的生产指标',
            type: 'bar',
            barWidth: '30%', //设置柱状图大小
        data: this.production,
              itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: "#03001C"
                        }, {
                            offset: 1,
                            color: "#0C75EB"
                        }
                    ]
                    )
                }
            }
           
        }
    ]
    };
option2 = {
    backgroundColor: 'rgba(3, 0, 28, 0.75)',
    //color: ["#0C75EB","#0CF5B3","#00DFDF"],
    title: {
        text: '活性炭的各项经营指标',
        padding: 14,
        textStyle: {
            color: '#ffffff',
            fontSize: 13,
        }
    },
    legend: {
        data: ['2020年度预算', '2020上年度费用', '2020下年度费用'],
        textStyle: {
            fontSize: 9,
            color: '#ffffff'//图表颜色

        },
        icon: 'roundRect',
        itemWidth: 10,
        itemHeight: 10,
        orient: 'vertical',
        x: 'right',
        padding: 13,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: this.xAxis1,
            axisTick: {
                alignWithLabel: true,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',//坐标轴颜色
                    fontSize: 10
                }

            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: { show: false },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',//坐标轴颜色
                    fontSize: 8
                }

            }
        }
    ],
    series: [
        {
            name: '2020年度预算',
            type: 'bar',
            barWidth: '15%', //设置柱状图大小
            data: this.yusuan,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: "#03001C"
                        }, {
                            offset: 1,
                            color: "#0C75EB"
                        }
                    ]
                    )
                }
            }
        },
        {
            name: '2020上年度费用',
            type: 'bar',
            barWidth: '15%', //设置柱状图大小
            data: this.firstHalf,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: "#03001C"
                        }, {
                            offset: 1,
                            color: "#0CF5B3"
                        }
                    ]
                    )
                }
            }
        },
        {
            name: '2020下年度费用',
            type: 'bar',
            barWidth: '15%', //设置柱状图大小
            data: this.secondHalf,
           itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: "#03001C"
                        }, {
                            offset: 1,
                            color: "#00DFDF"
                        }
                    ]
                    )
                }
            }
        },

    ]
    };
    option3 = {
    backgroundColor: 'rgba(3, 0, 28, 0.75)',
    color: ['#0CF5B3'],//图表颜色
    title: {
        text: '活性炭的生产运行负荷率',
        padding: 14,
        textStyle: {
            color: '#ffffff',
            fontSize: 13,
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#00DFDF'
            }
        }
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
    xAxis: [
        {
            type: 'category',
            splitLine: { show: false },
            boundaryGap: false,
            data: this.xAxis,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',//坐标轴颜色
                    fontSize: 10
                }

            }

        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: { show: false },
            name: '',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',//坐标轴颜色
                    fontSize: 8
                }

            }
        }
    ],
    series: [
        {
            name: '活性炭的生产运行负荷率',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.work,
            smooth: true,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: "#03001C"
                        }, {
                            offset: 1,
                            color: "#0CF5B3"
                        }
                    ]
                    )
                }
            }
        },


    ]
  };
option4 = {
    backgroundColor: 'rgba(3, 0, 28, 0.75)',
    /*color: ['#F7931E', '#0CF5B3', '#00DFDF'],*/
    title: {
        text: '活性炭的煤进耗存',
        padding: 14,
        textStyle: {
            color: '#ffffff',
            fontSize: 13,

        }
    },
    legend: {
        data: ['存煤', '耗煤', '进煤'],
        textStyle: {
            fontSize: 9,
            color: '#ffffff'//图表颜色

        },
        icon: 'roundRect',
        itemWidth: 10,
        itemHeight: 10,
        orient: 'vertical',
        x: 'right',
        padding: 13,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#00DFDF'
            }
        }
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
    xAxis: [
        {
            type: 'category',
            splitLine: { show: false },
            boundaryGap: false,
            data: this.xAxis,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',//坐标轴颜色
                    fontSize: 10
                }

            }

        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: { show: false },
            name: '',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',//坐标轴颜色
                    fontSize: 8
                }

            }
        }
    ],
    series: [
        {
            name: '存煤',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.save,
            smooth: true,//曲线
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0,
                        [
                            {
                                offset: 0,
                                color: "#03001C"
                            },
                            {
                                offset: 1,
                                color: "#F7931E"
                            }
                        ]
                    )
                }
            }

        },
        {
            name: '耗煤',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data:this.consumption,
            smooth: true,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0,
                        [
                            {
                                offset: 0,
                                color: "#03001C"
                            },
                            {
                                offset: 1,
                                color: "#0CF5B3"
                            }
                        ]
                    )
                }
            }

        },

        {
            name: '进煤',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.enter,
            smooth: true,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0,
                        [
                            {
                                offset: 0,
                                color: "#03001C"
                            },
                            {
                                offset: 1,
                                color: "#00DFDF"
                            }
                        ]
                    )
                }
            }
        },

    ]
};
option5 = {
    backgroundColor: 'rgba(3, 0, 28, 0.75)',
    color: ['#00DFDF', '#0CF5B3'],//图表颜色
    title: {
        text: '环保数据',
        padding: 14,
        textStyle: {
            color: '#ffffff',
            fontSize: 13,
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['目标值', '完成值'],
        orient: 'vertical',
        x: 'right',
        padding: 13,
        itemWidth: 10,
        itemHeight: 10,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        splitLine: { show: false },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#ffffff',//坐标轴颜色
                fontSize: 10
            }

        }
    },
    yAxis: {
        type: 'category',
        data: ['SO2', 'NOX', '粉尘', 'COD', '氨氮'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#ffffff',//坐标轴颜色
                fontSize: 8
            }

        }
    },
    series: [
        {
            name: '目标值',
            type: 'bar',
            stack: '总量',
            label: {
                show: false,
                position: 'insideRight'
            },
            data: this.target,
            barWidth: '30%', //设置柱状图大小
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: "#03001C"
                        },
                        {
                            offset: 1,
                            color: "#0C75EB"
                        }
                    ]
                    )
                }
            }
        },
        {
            name: '完成值',
            type: 'bar',
            stack: '总量',
            label: {
                show: false,
                position: 'insideRight'
            },
            data: this.complete,
            barWidth: '30%', //设置柱状图大小
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: "#03001C"
                        },
                        {
                            offset: 1,
                            color: "#0CF5B3"
                        }
                    ]
                    )
                }
            }
        },
    ]
};
  updateOption1 = {};
  updateOption2 = {};
  updateOption3 = {};
  updateOption4 = {};
  updateOption5 = {};
}



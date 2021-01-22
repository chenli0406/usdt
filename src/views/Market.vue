<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="main-box">
      <div class="head-portrait">
        <img src="../assets/img/market-bg.png" />
      </div>
    </div>
    <div style="background: #f4f6f8;height:20px;width:100%"></div>
    <div class="content-box">
      <div class="box">
        <div class="card">
          <ul class="echart">
            <li v-for="(item, index) in btn" :key="index" @click="onclick(index)" :class="{ active: index == activeIndex }">
              {{ item.name }}
            </li>
          </ul>
          <div class="myChart">
            <div id="myChart" :style="{ height: '300px', width: '100%' }"></div>
          </div>
        </div>
        <div class="card">
          <div class="card-box">
            <p class="title">USDT阶段涨幅</p>
            <div>
              <ul class="list">
                <li>今日</li>
                <li>近1周</li>
                <li>近1月</li>
                <li>近3月</li>
                <li>近6月</li>
                <li>近1年</li>
              </ul>
              <ul>
                <li v-for="(item, index) in options" :key="index">{{item.num }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/navBar/index';
const echarts = require('echarts');
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      navData: {
        leftIcon: false,
        leftImg: require('@/assets/img/market-logo.png'),
      },
      activeIndex: 0,
      btn: [
        {
          name: '近1月',
        },
        {
          name: '近3月',
        },
        {
          name: '近6月',
        },
        {
          name: '近1年',
        },
        {
          name: '近3年',
        },
      ],
      options:[
        {
          type: "1",
          num:'0.14%'
        },
         {
          type: "0",
          num:'0.16%'
        },
         {
          type: "0",
          num:'0.2%'
        },
         {
          type: "1",
          num:'0.44%'
        }, {
          type: "1",
          num:'0.44%'
        },
        {
          type: "0",
          num:'0.9%'
        }
      ]
    };
  },
  mounted() {
    this.drawLine();
  },
  created() {},
  methods: {
    gotoNoticeList() {
      this.$router.push('/NoticeList');
    },
    onclick(index) {
      this.activeIndex = index;
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'));
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['01', '02', '03', '04', '05', '06', '07'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#999',
              fontSize: 24,
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#999',
              fontSize: 24,
            },
          },
        },
        series: [
          {
            data: ['3.1', '4.55', '4.60', '4.21', '2', '4.91', '5.01'],
            type: 'line',
            symbolSize: 14, //拐点大小
            symbol: 'circle', //拐点样式
            smooth: true, //是否用曲线显示
            itemStyle: {
              normal: {
                color: '#4F75FE',
              },
            },
            lineStyle: {
              color: '#4F75FE', //线条颜色
              width: 3,
            },
            areaStyle: {
              normal: {
                // 填充色渐变
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 1, color: '#4F75FE' },
                  { offset: 0, color: '#FFF' },
                ]),
                opacity: 0.1,
              },
            },
          },
        ],
      });
      //手机兼容
      window.onresize = myChart.resize;
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  overflow-y: hidden;
  .head-portrait {
    img{
      width: 100%;
    }
  }
  .content-box {
    background: #f4f6f8;
    padding-bottom: 60px;
    z-index: 1;
    .box {
      width: 100%;
      .card {
        background: #ffffff;
        border-radius: 20px;
        margin:0 20px;
        .echart {
          padding:20px  10px;
          display: flex;
          justify-content: space-between;
          li {
            background: #f4f6f8;
            border-radius: 23px;
            padding: 6px 12px;
            color: #999;
          }
          .active {
            background: #4f75fe;
            color: #fff;
          }
        }
        .card-box {
          margin-top: 20px;
          padding:20px 10px;
          .title {
            font-size: 14px;
            font-weight: 600;
            margin: 6px 0;
            color: #333333;
          }
          ul{
            display: flex;
            li{
              width: calc(100% / 6); ;
              border: 1px solid #eee;
              text-align: center;
              color: #333;
              padding: 6px 0;
            }
          }
          .list{
            li{
              border-bottom: none;
            }
          }
        }
      }
    }
  }
}
.main-box{
  padding-bottom: 10px;
}
</style>

<template>
  <div class="cont">
    <div class="main">
      <div class="img">
        <img src="http://img2.imgtn.bdimg.com/it/u=2260937709,2065328859&fm=26&gp=0.jpg" height="510" width="780"
             alt="">
        <div class="title">仪器仪表仪器仪表制冰机产品全国执行经销...</div>
      </div>
      <ul>
        <li v-for="item of 11">华夏VZR系列制冰机产品</li>
      </ul>
    </div>
    <div class="news">
      <el-card v-for="item of 9" :key="item" :body-style="{ padding: '0px' }" class="cell" shadow="hover">
        <img src="http://img2.imgtn.bdimg.com/it/u=2260937709,2065328859&fm=26&gp=0.jpg" width="350" height="300">
        <div class="top">
          <div class="date">
            <div class="day">{{item}}</div>
            <div class="year">2019-05</div>
          </div>
          <div class="title">华夏VZR系列制冰机产品2011年全国招商经销商价格执行</div>
        </div>
        <div class="info">石家庄XXX仪器设备有限公司华夏VZR制冰机系列产品，2019年全国招商经销商价格已公布，详细区域代理指导价格及公开价格请咨询...</div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news"
  }
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    margin-top: 90px;

    .img {
      position: relative;

      .title {
        position: absolute;
        bottom: 0;
        width: 100%;
        line-height: 80px;
        font-size: 30px;
        text-align: center;
        color: #fff;
        background: rgba(0, 0, 0, .5);
      }
    }

    ul {
      li {
        font-size: 22px;
        color: #666666;
        line-height: 44px;
        list-style: none;
      }
    }
  }
  .news {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 40px auto;

    .cell {
      width: 350px;

      .top {
        display: flex;
        padding-bottom: 4px;
        border-bottom: 1px solid #d9d9d9;

        .date {
          min-width: 80px;
          text-align: center;

          .day {
            font-size: 60px;
            color: #d9d9d9;
            font-style: italic;
          }

          .year {
            font-size: 12px;
            color: #999999;
          }

        }

        .title {
          padding: 16px 10px;
          font-size: 16px;
          color: #333;
        }
      }

      .info {
        padding: 6px;
        color: #999;
        font-size: 14px;
      }

    }
  }
</style>

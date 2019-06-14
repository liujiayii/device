<template>
  <div class="">
    <div class="cont">
      <el-carousel type="card" height="900px" indicator-position="none" arrow="never">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-card class="card" :body-style="{ padding: '0px' }">
            <img src="http://img2.imgtn.bdimg.com/it/u=2260937709,2065328859&fm=26&gp=0.jpg" width="600" height="540">
            <div class="text">
              <p class="cn">公司使命</p>
              <p class="eu">Corporate mission</p>
              <div class="bottom">云阙仪器公司的使命是为科学家们建造一个安全、实用及舒适的实验室，并为科研事业及环保事业而奋斗！</div>
            </div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
      <div class="news-title">
        <p class="cn">公司新闻</p>
        <p class="eu">Company News</p>
      </div>
      <div class="news">
        <el-card v-for="item of 3" :key="item" :body-style="{ padding: '0px' }" class="cell" shadow="hover">
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
    <div class="product">
      <div class="cont">
        <ul class="list-box">
          <li v-for="item of 6" class="list">
            <img src="http://img2.imgtn.bdimg.com/it/u=2260937709,2065328859&fm=26&gp=0.jpg" alt="" height="140"
                 width="194">
            <div class="info">
              <div class="title">{{item}}电子可调微波炉</div>
              <div class="detail">本产品适用于工业、农业、工矿、医疗卫生、科研单位、实验室等加热用。</div>
              <el-button class="btn" type="primary" size="mini">查看更多</el-button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style lang="scss" scoped>
  .card {
    width: 600px;
    position: relative;

    .text {
      padding: 56px;
      border-bottom: 4px solid #0151a6;

      .cn {
        color: #333333;
        font-size: 18px;
        text-align: center;
      }

      .eu {
        font-size: 16px;
        color: #cccccc;
        text-align: center;
      }

      .bottom {
        color: #666666;
        font-size: 16px;
        line-height: 28px;
      }
    }
  }

  .news-title {
    text-align: center;

    .cn {
      color: #333333;
      font-size: 30px;
    }

    .eu {
      color: #999;
      font-size: 16px;
    }
  }

  .news {
    display: flex;
    justify-content: space-between;

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

  .product {
    width: 100%;
    height: 700px;
    background-image: url("../../assets/product.png");
    margin: 100px 0;

    .cont {
      display: flex;
      justify-content: flex-end;

      .list-box {
        background: #fff;
        padding: 14px;
        width: 690px;
        max-height: 640px;
        overflow: scroll;

        &::-webkit-scrollbar {
          display: none;
        }

        .list {
          list-style: none;
          display: flex;
          margin-bottom: 14px;

          :last-child {
            margin-bottom: 0;
          }

          &:hover {
            background: #f7f7f7;
          }

          .info {
            position: relative;
            padding: 12px 20px;

            .title {
              font-size: 16px;
              color: #333333;
            }

            .detail {
              padding-top: 12px;
              font-size: 14px;
              color: #999999;
            }

            .btn {
              position: absolute;
              right: 40px;
              bottom: 14px;
            }
          }
        }
      }
    }
  }
</style>

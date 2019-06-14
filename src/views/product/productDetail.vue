<template>
  <div class="cont">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>产品中心</el-breadcrumb-item>
        <el-breadcrumb-item>产品详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="top">
      <div class="img">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
             width="270" height="310">
      </div>
      <div class="detail">
        <div class="tit">铝壳膜式燃气表</div>
        <div class="info">供应OBOV20-C电源防器是一种多功能普通网格表，电源防器是一种多功能普通网格表。电源防器是一种多功能普通网格表。电源防器是一种多功能普通网格表。</div>
      </div>
    </div>
    <div class="title">
      <span class="text">技术文章</span>
    </div>
    <ul>
      <li v-for="item of 6">可监测12个单相回路的用电电压、电流、功率因数、有功功率和电能</li>
    </ul>
    <div class="title">
      <span class="text">产品尺寸</span>
    </div>
    <ul>
      <li v-for="item of 6">可监测12个单相回路的用电电压、电流、功率因数、有功功率和电能</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "productDetail"
  }
</script>

<style lang="scss" scoped>
  .bread {
    margin-top: 45px;
    border-bottom: 1px solid #ece9e9;
    padding-bottom: 10px;
  }

  .top {
    display: flex;
    padding-top: 20px;

    .img {
      width: 270px;
      height: 310px;
      border: 1px solid #dadada;
    }

    .detail {
      margin-left: 32px;
      width: 550px;

      .tit {
        padding-top: 10px;
        color: #ff3333;
        font-size: 30px;
      }

      .info {
        padding-top: 60px;
        font-size: 18px;
        color: #666666;
        line-height: 36px;
      }
    }
  }

  .title {
    width: 100%;
    border-bottom: 1px solid #cccccc;

    .text {
      font-size: 24px;
      line-height: 66px;
      padding: 20px 4px;
      color: #ff3333;
      border-bottom: 1px solid #ff3333;
    }
  }

  li {
    font-size: 18px;
    color: #666;
    line-height: 36px;
  }
</style>

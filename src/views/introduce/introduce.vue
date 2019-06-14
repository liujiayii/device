<template>
  <div class="cont">
    <div class="top">
      <div class="img">
        <img src="http://img2.imgtn.bdimg.com/it/u=2260937709,2065328859&fm=26&gp=0.jpg" width="580" height="460"
             alt="">
      </div>
      <div class="info">
        <div class="title">XXX仪器设备公司</div>
        <div class="detail"> XXX
          仪器公司所涉及的产品遍布大专院校、科研单位、工厂企业、医疗、检验、军工、农业、食品、超市、治金矿山、建筑、石油、路桥等行业，产品以其卓越的性能，快捷周到的售后服务，物超所值的价格，畅销全国各省、市，并出口世界各地。致力于产品的研发创新，拥有专业的技术、销售、售后服务人员，形成一支高素质富有团队创新精神的队伍，在“以诚待人、以德服人、以智行人”的精神感召下，企业坚守“质量先进，服务至上”的经营理念。
          XXX
          仪器公司所涉及的产品遍布大专院校、科研单位、工厂企业、医疗、检验、军工、农业、食品、超市、治金矿山、建筑、石油、路桥等行业，卓越的性能，快捷周到的售后服务，物超所值的价格，畅销全国各省、市，并出口世界各地。我们秉承创新、专业、高质的方针。致力于产品的研发创新，拥有专业的技术、销售、售后服务人员，形成一支高素质富有团队创新精神的队伍，在“以诚待人、以德服人、以智行人”的精神感召下，企业坚守“质量先进，服务至上”的经营理念，积极研制开发新产品、结交新客户，竭诚为客户提供优质的产品。欢迎国内外新老客户光临，互利互惠、携手并进！
        </div>
      </div>
    </div>
    <div class="list-box" v-for="item of 6">
      <div class="title">公司使命:</div>
      <div class="detail">云阙仪器公司的使命是为科学家们建造一个安全、实用及舒适的实验室，并为科研事业及环保事业而奋斗！</div>
    </div>
    <div class="show">
      <div class="title">
        <div class="cn">企业展示</div>
        <div class="eu">ENTERPRISE DISPLAY</div>
      </div>
      <div class="img-box">
        <img v-for="item of 4" src="http://img2.imgtn.bdimg.com/it/u=2260937709,2065328859&fm=26&gp=0.jpg" alt="" width="275"
             height="275">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "introduce"
  }
</script>

<style lang="scss" scoped>
  .top {
    display: flex;
    color: #333;
    margin: 100px auto 40px;

    .info {
      padding: 18px;

      .title {
        font-size: 30px;
        text-align: center;
        padding-bottom: 4px;
      }

      .detail {
        font-size: 16px;
        line-height: 30px;
      }
    }
  }

  .list-box {
    font-size: 16px;

    .title {
      color: #333333;
      margin-top: 30px;
    }

    .detail {
      color: #666666;
      line-height: 30px;
    }
  }

  .show {
    margin-bottom: 60px;
    .title {
      margin: 40px auto;
      text-align: center;

      .cn {
        font-size: 30px;
      }

      .eu {
        font-size: 14px;
      }
    }

    .img-box {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

<template>
  <div class="cont">
    <div class="left">
      <h3>产品分类</h3>
      <ul>
        <li :class="activeLi===item?'active':''" v-for="item of 10" @click="()=>activeLi=item">过程记录仪 <i
          class="el-icon-caret-right"></i></li>
      </ul>
    </div>
    <div class="right">
      <el-card v-for="item of 16" class="card" :body-style="{ padding: '0px' }">
        <router-link :to="{ path: 'productDetail' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
          <div style="padding: 14px;">
            <div class="price">汉堡</div>
            <div class="name">哈宝</div>
            <div class="model">型号</div>
          </div>
        </router-link>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "product",
    data() {
      return {
        activeLi: 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cont {
    display: flex;

    .left {
      width: 180px;
      min-width: 180px;
      max-width: 180px;

      h3 {
        font-size: 24px;
        color: #498ce7;
        text-align: center;
      }

      ul {
        padding: 0;
        width: 180px;
        border-top: 2px solid #498ce7;

        li {
          list-style: none;
          line-height: 60px;
          padding: 0 14px;
          background: #f3f3f3;
          font-size: 18px;
          color: #666666;
          border-bottom: 1px solid #e1e1e1;
          cursor: pointer;

          &.active {
            background: #689fe9;
            color: #fff;
          }

          i {
            float: right;
            line-height: 60px;
          }
        }
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      margin-left: 10px;
      margin-top: 80px;

      .card {
        width: 250px;

        img {
          width: 100%;
        }

        a {
          text-decoration: none;
        }

        .price {
          font-size: 24px;
          color: #ff3333;
        }

        .name {
          font-size: 18px;
          color: #666666;
        }

        .model {
          font-size: 16px;
          color: #666666;
        }
      }
    }
  }

</style>

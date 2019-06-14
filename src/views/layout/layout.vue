<template>
  <el-container>
    <el-header>
      <div class="main">
        <div class="logo">LOGO</div>
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <template v-for="item of menuData">
            <el-menu-item :index="item.path" :key="item.path" v-if="item.nav">{{item.name}}</el-menu-item>
          </template>
        </el-menu>
      </div>
    </el-header>
    <el-main>
      <el-backtop></el-backtop>
      <div class="banner"></div>
      <router-view/>
    </el-main>
    <el-footer>
      <div class="cont">
        <div class="link">
          <ul v-for="item of 3" class="">
            <li v-for="item of 4">{{item}}产品服务</li>
          </ul>
          <div class="phone"><i class="el-icon-phone-outline"></i>400-000-0000</div>
        </div>
        <div class="friends">
          <a href="" v-for="item of 8">智莱云官网</a>
        </div>
        <div class="company">CIMPMSSL 2008-2018 XXXXX仪器设备有限公司 ALLlooj</div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
  import {menuData} from "../../config/route";

  export default {
    name: "layout",
    data() {
      return {
        activeIndex: 'home',
        menuData
      };
    },
    methods: {},
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .el-header {
    background-color: #545c64;
    color: #fff;
    height: 90px !important;

    .el-menu-item {
      height: 90px;
      line-height: 90px !important;
    }

    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }

    .main {
      display: flex;
      justify-content: space-between;
      width: 1200px;
      margin: 0 auto;

      .logo {
        font-size: 36px;
        line-height: 90px;
      }
    }
  }

  .el-footer {
    background: #000;
    height: auto !important;
    color: #fefefe;

    .link {
      display: flex;
      width: 1000px;
      margin: 76px auto 54px;

      ul {
        padding: 0 60px;

        li {
          list-style: none;
          font-size: 18px;
          text-align: center;
          line-height: 30px;

          &:first-child {
            font-size: 24px;
            padding-bottom: 20px;
          }
        }

        &:nth-child(2) {
          border-right: 2px solid #fff;
          border-left: 2px solid #fff;
        }
      }

      .phone {
        font-size: 26px;
        line-height: 120px;

        i {
          margin-right: 4px;
        }
      }
    }

    .friends {
      border-top: 1px dashed #808080;
      border-bottom: 1px dashed #808080;

      a {
        color: #f7f7f7;
        line-height: 66px;
        margin: 0 26px;
        text-decoration: none;
      }
    }

    .company {
      font-size: 12px;
      line-height: 56px;
      text-align: center;
    }
  }

  .el-main {
    min-height: 800px;
    padding: 0;
    overflow: hidden;
  }

  .banner {
    height: 750px;
    width: 100%;
    background-image: url("../../assets/banner.png");
  }
</style>

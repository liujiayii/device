<template>
  <div class="cont">
    <div class="main">
      <div class="form">
        <div class="hello">您好 <span>Hello!</span></div>
        <div class="thanks">感谢您来XXXX，若您有购买的意向或者需要其他帮助，可以给我们留言，我们会在第一
          时间回复您。
        </div>
        <el-input class="input" placeholder="您的称呼"></el-input>
        <el-input class="input" placeholder="您的邮箱"></el-input>
        <el-input class="input" placeholder="您的联系方式"></el-input>
        <el-input class="input" type="textarea" :rows="4" placeholder="请输入内容"></el-input>
        <el-button type="primary">提交</el-button>
      </div>
      <div><img src="http://img2.imgtn.bdimg.com/it/u=2260937709,2065328859&fm=26&gp=0.jpg" alt="" width="560"
                height="450"></div>
    </div>
    <div class="map">
      <img src="../../assets/map.png" height="350" width="1200"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contact"
  }
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    margin: 60px auto;

    .form {
      color: #333333;
      width: 621px;
      margin-right: 10px;

      .hello {
        font-size: 22px;

        span {
          color: #498ce7;
        }
      }

      .thanks {
        font-size: 16px;
        line-height: 36px;
        margin-bottom: 10px;
      }

      .input {
        margin-bottom: 20px;
      }
    }
  }
</style>

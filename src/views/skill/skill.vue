<template>
  <div class="cont">
    <div class="title">
      <span class="text">技术文章</span>
    </div>
    <div class="list-box">
      <div class="list" v-for="item of 12">
        <span class="dot"></span>
        <span class="date">2019/05/28</span>
        <span>校园ic卡智能水表的防冻问题十分重要</span>
        <span class="read">阅读：36</span>
      </div>
    </div>
    <div class="page">
      <el-pagination
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "skill"
  }
</script>

<style lang="scss" scoped>
  .title {
    width: 100%;
    border-bottom: 1px solid #cccccc;

    .text {
      font-size: 24px;
      line-height: 66px;
      padding: 20px 4px;
      color: #333333;
      border-bottom: 1px solid #ff9933;
    }
  }

  .list-box {
    border-bottom: 1px solid #cccccc;

    .list {
      position: relative;
      font-size: 20px;
      color: #999;
      line-height: 86px;

      .dot {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #498ce7;
        margin: 0 14px;
      }

      .date {
        background: #dde7f4;
        color: #498ce7;
        font-size: 14px;
        padding: 6px;
        margin-right: 30px;
      }

      .read {
        position: absolute;
        right: 0;
      }
    }
  }

  .page {
    display: flex;
    justify-content: center;
    margin: 60px auto 70px;
  }
</style>

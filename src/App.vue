<template>
  <div id="app">
    <layout/>
  </div>
</template>
<script>
  import layout from '@/views/layout/layout'

  export default {
    name: "App",
    components: {layout}
  }
</script>
<style>
  body {
    margin: 0;
  }

  .cont {
    width: 1200px;
    margin: 0 auto;
  }

  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

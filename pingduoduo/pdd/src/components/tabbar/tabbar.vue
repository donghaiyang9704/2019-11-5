<template>
  <div class="tabbar">
     <span class="tabbar-item">
       <img src="../../img/home.png" alt="">
       <span>首页</span>
     </span>
      <span class="tabbar-item">
       <img src="../../img/fl.png" alt="">
       <span>分类</span>
     </span>
      <span class="tabbar-item">
       <img src="../../img/mine.png" alt="">
       <span>我的</span>
     </span>
      <span class="tabbar-item">
       <img src="../../img/mine.png" alt="">
       <span>我的</span>
     </span>
      <span class="tabbar-item">
       <img src="../../img/mine.png" alt="">
       <span>我的</span>
     </span>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style  scoped>
  .tabbar{
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
  }
  .tabbar .tabbar-item{
     display: flex;
     flex: 1;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  }
  .tabbar .tabbar-item img{
   width: 23px;
   height: 23px;
  }
  .tabbar .tabbar-item span{
     font-size: 15px;
     color: #666;
  }
</style>
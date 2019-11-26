<template>
  <div id="app">
    <router-view/>
    <tabbar />
  </div>
</template>

<script>
import tabbar from './components/tabbar/tabbar'
export default {
  name: 'App',
  components:{
    tabbar
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
width: 100vw;
height: 100vh;

}
</style>

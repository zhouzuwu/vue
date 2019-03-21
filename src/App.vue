<template>
<div>
    <van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
/>

<router-view></router-view>
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to='/vip'>标签</van-tabbar-item>
  <van-tabbar-item icon="search" dot to='/svip'>标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  data: () => ({
    active:null
  })
};
</script>

<style  scoped>

</style>
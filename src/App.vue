<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  background: url(http://www.federalmogul.com/en-US/PublishingImages/SocialMedia/socialmedia_background.jpg);
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
}
#app {
  color: white;
  text-align: center;
}
.container {
  max-width: 1200px;
  min-width: 1200px;
  display: inline-block;
  margin: 0 auto;
}
</style>
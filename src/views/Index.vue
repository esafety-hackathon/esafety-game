<template>
    <div id="indexview">
      <img class="image" src="/static/cdlogo.png">
      <h1>The e-Safety Game</h1>
      <p class="font">Learn how to be safe online</p>
      <img class="playbutton" src="/static/bcv2.png" @click="next">
    </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    next() {
      this.$router.push('/characterSelection');
    }
  }
}
</script>

<style scoped>
#indexview {
  text-align: center;
}
h1 {
  margin: 0;
  text-align: center;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.image {
  height: 212px;
  width: 340px;
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.playbutton {
  height: 100px;
  width: 100px;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

}
.font {
  margin: 0;
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.circle {
  width: 72px;
  height: 72px;
  line-height: 72px;
  background: white;
  border-radius: 36px;
  text-align: center;
  background-size: 72px 72px;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  color: black(0,0,0,0);
  margin-right: 8px;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
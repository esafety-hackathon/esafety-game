<template>
    <div id="indexview">
      <h1>The e-Safety Game</h1>
      <p>Learn how to be safe online</p>
      <button class="circle" @click="next">Play</button>
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
  color: rgba(0,0,0,0);
  margin-right: 8px;
}
</style>
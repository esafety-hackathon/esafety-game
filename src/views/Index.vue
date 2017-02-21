<template>
    <div id="indexview">
      <h1>The e-Safety Game</h1>
      <p>Learn how to be safe online</p>
      <button @click="next">Play</button>
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
</style>
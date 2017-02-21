<template>
  <div class="avatar" v-bind:style="'background-image:url('+url+')'" @click="click"></div>
</template>
<script>
export default {
  props: ["url"],
  methods: {
    click() {
      this.$emit('clicked');
    }
  }
}
</script>
<style lang="scss">
$size: 72px;
$hoverSize: 92px;
.avatar {
  display: inline-block;
  width: $size;
  height: $size;
  cursor: pointer;
  background-size: $size $size;
  margin: 4px;
  border: 2px solid rgba(0, 0, 0, 0);
}

.avatar:hover {
  border: 2px solid yellow;
}
</style>
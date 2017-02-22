<template>
  <div
    class="avatar"
    v-bind:style="'background-image:url('+url+')'"
    @click="click"
    :class="this.selected ? 'selected' : 'notSelected'"></div>
</template>
<script>
export default {
  props: ["url"],
  computed: {
    selected() {
      return this.$parent.selectedAvatar === this.url;
    }
  },
  methods: {
    click() {
      this.$emit('clicked', this.url);
    }
  }
}
</script>
<style lang="scss" scoped>
$size: 72px;
$hoverSize: 92px;
.avatar {
  display: inline-block;
  width: $size;
  height: $size;
  cursor: pointer;
  background-size: auto $size;
  background-position: center;
  margin: 4px;
}

.avatar:hover {
  border: 2px solid white;
  margin: 2px;
}

.avatar.selected {
  border: 2px solid yellow;
  margin: 2px;
}
</style>
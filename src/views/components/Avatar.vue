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
  border-radius: $size;
  background-position: center;
  transition: 200ms height, 200ms width, 200ms background-size, 200ms border-radius;
  margin: 4px;
}

.avatar.selected {
  border: 2px solid yellow;
  margin: 2px;
}

@media only screen and (min-width:1024px) {
  .avatar:hover {
    border: 2px solid white;
    background-size: auto $hoverSize;
    border-radius: $hoverSize;
    height: $hoverSize;
    width: $hoverSize;
    margin: 2px;
  }
}
</style>
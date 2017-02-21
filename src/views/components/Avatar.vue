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
  border: 2px solid white;
}

.avatar.selected {
  border: 2px solid yellow;
}
</style>
<template>
  <div id="characterSelectionView">
    <h1>Character Selection</h1>
    <h2>Avatar</h2>
    <div id="avatars">
      <avatar v-for="avatar in this.$root.data.avatars" :url="avatar" v-on:clicked="avatarSelected"></avatar>
    </div>
    <h2>Character Name</h2>
    <input type="text" placeholder="Character Name"></input>
  </div>
</template>
<script>
import Avatar from './components/Avatar';
export default {
  components: {
    'avatar': Avatar,
  },
  name: 'characterSelection',
  methods: {
    avatarSelected(args) {
      console.log(args);
    }
  }
}
</script>
<style scoped>
#characterSelectionView {
  text-align: center;
}

input[type=text] {
  font-size: 18px;
}

#avatars {
  display: inline-block;
}
</style>
<template>
  <div id="characterSelectionView">
    <h1>Character Selection</h1>
    <h2>Avatars</h2>
    <div id="avatars">
      <avatar v-for="avatar in this.$root.data.avatars" :url="avatar" v-on:clicked="avatarSelected"></avatar>
    </div>
    <h2>Character Name</h2>
    <input type="text" placeholder="Character Name" v-model="name"></input><br /><br />
    <button v-if="name && selectedAvatar" @click="next">Continue</button>
  </div>
</template>
<script>
import Avatar from './components/Avatar';
export default {
  components: {
    'avatar': Avatar,
  },
  data() {
    return {
      selectedAvatar: null,
      name: null,
    }
  },
  name: 'characterSelection',
  methods: {
    avatarSelected(avatar) {
      this.selectedAvatar = avatar;
      this.$emit('avatarSelected', avatar);
    },
    next() {
      this.$root.data.playerName = this.name;
      this.$root.data.playerAvatar = this.selectedAvatar;
      this.$router.push('/dashboard');
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
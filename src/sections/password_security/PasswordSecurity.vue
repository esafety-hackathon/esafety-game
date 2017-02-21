<template>
  <div id="passwordgenerator">
    <button @click="generate" :disabled="generating ? true : false">Generate password</button>
    <div id="password">{{ password }}</div>
  </div>
</template>

<script>
import generatePassword from './generator';

export default {
  name: 'appa',
  data () {
    return {
      password: generatePassword(),
      generating: false,
    }
  },
  methods: {
    generate() {
      let i = 0;
      this.generating = true;
      const interval = setInterval(() => {
        this.password = generatePassword();
        i++;
        if (i > 30) {
          this.generating = false;
          clearInterval(interval);
        }
      }, 20);
    }
  }
}
</script>

<style scoped>
button, #password {
  font-size: 2rem;
  font-family: consolas;
}
</style>
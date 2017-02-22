<template>
  <div id="passwordgenerator">
    <button @click="generate" :disabled="generating ? true : false">Generate</button>
    <span id="password">{{ password }}</span>
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
}
</style>
<template>
  <div class="section" :style="'background:'+section.theme+'; color:'+section.textColor" @click="next">
    <div class="title">{{ section.name }}</div>
    <p>{{ section.desc }}</p>
  </div>
</template>
<script>
export default {
  props: ['section'],
  methods: {
    next() {
      for (const sectionKey in this.$root.data.sections) {
        if (this.$root.data.sections[sectionKey] === this.section) {
          this.$router.push(`/section/${sectionKey}`);
        }
      }
    }
  }
}
</script>
<style scoped>
.title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}
.section {
  display: block;
  padding: 16px;
  margin-bottom: 32px;
  padding-bottom: 48px;
  cursor: pointer;
}
.section:hover {
}
</style>
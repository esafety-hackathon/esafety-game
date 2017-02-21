<template>
  <div class="section" :style="'background:'+section.theme+'; color:'+section.textColor">
    <div class="title">{{ section.name }}</div>
    <p>{{ section.desc }}</p>
  </div>
</template>
<script>
export default {
  props: ['section']
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
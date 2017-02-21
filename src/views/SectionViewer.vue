<template>
<div class="sectionViewer">
<h1>{{ section.name }}</h1>
<p>{{ section.desc }}</p>
<router-view @next="next"></router-view>
</div>
</template>
<script>
export default {
  data() {
    return {
      currentQ: -1,
      section: this.$root.data.sections[this.$route.params.name]
    }
  },
  methods: {
    next() {
      const current = this.section.activities[this.currentQ];
      const next = this.section.activities[this.currentQ+1];
      if (!next) return this.done();
      if (next.type === 'truefalse') {

      }
    }
  }
}
</script>
<style></style>
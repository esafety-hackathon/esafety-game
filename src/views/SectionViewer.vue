<template>
<div class="sectionViewer">
<h1>{{ section.name }}</h1>
<p>{{ section.desc }}</p>
<button @click="next">play</button>
<router-view @next="next" :key="$route.params.question"></router-view>
</div>
</template>
<script>
export default {
  data() {
    return {
      section: this.$root.data.sections[this.$route.params.name]
    }
  },
  computed: {
    question() {
      return Number(this.$route.params.question);
    }
  },
  methods: {
    next() {
      let q = this.question;
      if (isNaN(q)) q = -1;
      const current = this.section.activities[q];
      const next = this.section.activities[q ? q + 1 : 0];
      if (!next) return this.done();
      if (next.type === 'truefalse') {
        this.$router.push(`/section/${this.$route.params.name}/truefalse/${q + 1}`);
      }
    },
    done() {
      this.$router.push(`/dashboard`);
    }
  }
}
</script>
<style></style>
<template>
<div class="sectionViewer">
<!--<h1>{{ section.name }}</h1>
<p>{{ section.desc }}</p>-->
<div class="document">
  <h1><span @click="$router.go(-1)" style="cursor: pointer">🔙</span>  {{ this.section.name }}</h1>
  <div class="article" v-for="article in this.section.file">
    <h2>{{ article[0] }}</h2>
    <p v-html="marked(article[1])"></p>
  </div>
</div>
<router-view @next="next" :key="$route.params.question"></router-view>
</div>
</template>
<script>
import marked from 'marked';
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
    marked(content) {
      return marked(content);
    },
    done() {
      this.$router.push(`/dashboard`);
    }
  }
}
</script>
<style lang="scss">
.sectionViewer {
  margin: 1rem;
  padding: 1rem;
  text-align: left;
  background: #fafafa;
  color: black;
}

.document {
  .article {
    padding: 1rem;
    margin-bottom: 0;
    transition: 100ms background;
  }
  .article:hover {
    background: white;
  }
  h2{
    margin: 0;
    margin-top: 16px;
    font-size: 20px;
  }
  p {
    margin-top: 8px;
  }
  a {
    text-decoration: none;
    color: black;
    border-bottom: 1px dotted;
    font-weight: bold;
  }
}
</style>
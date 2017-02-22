<template>
<div class="sectionViewer">
<!--<h1>{{ section.name }}</h1>
<p>{{ section.desc }}</p>-->
<div class="document">
  <div class="hSection">
    <h1><span @click="$router.go(-1)" style="cursor: pointer">🔙</span>  {{ this.section.name }} <span class="light">| Help Articles</span></h1>
    <div class="article" v-for="article in this.section.file">
      <h2>{{ article[0] }}</h2>
      <p v-html="marked(article[1])"></p>
    </div>
  </div>
  <div class="hSection">
    <h1><span @click="$router.go(-1)" style="cursor: pointer">🔙</span>  {{ this.section.name }} <span class="light">| Activities</span></h1>
    <div class="testQ" v-for="activity in this.section.activities">
      <component :is="activityType(activity)" :activity="activity"></component>
    </div>
  </div>
</div>
<router-view @next="next" :key="$route.params.question"></router-view>
</div>
</template>
<script>
import marked from 'marked';
import TrueFalseActivity from './activities/TrueFalseActivity';
export default {
  components: {
    'truefalse': TrueFalseActivity,
  },
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
    activityType(activity) {
      if (activity.type === 'custom') return activity.component;
      return activity.type;
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
  text-align: left;
  color: black;
}
.hSection {
  background: #fafafa;
  margin: 1rem;
  padding: 1rem;
}
.document {
  .light {
    color: #555;
    font-weight: 300;
  }
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
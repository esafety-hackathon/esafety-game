<template>
  <div class="container">
    <div id="dashboardView">
      <div id="navbar">
        <div class="circle" id="points" title="Points">{{ this.$root.data.points }}</div>
        <div class="circle avatar" :title="'Avatar for ' + this.$root.data.playerName " :style="'background-image:url('+this.$root.data.playerAvatar+')'"> .</div>
        <div id="rhs">
          <div class="circle" id="points" title="Points">⚙️</div>
          <div class="circle" id="points" title="Points">🏆</div>
          <div class="circle" id="points" title="Points">❔</div>
        </div>
      </div>
      <div id="searchbar">
        <input v-model="query" type="text" placeholder="Search for anything here..."></input>
      </div>
      <div class="container" id="sections" v-show="!shouldSearch">
        <h1>Sections</h1>
        <section-renderer v-for="section in this.$root.data.sections" :section="section"></section-renderer>
      </div>
      <div class="container" id="searchResults" v-show="shouldSearch">
        <h1><span @click="query=''" style="cursor: pointer">🔙</span> Search Results</h1>
        <div id="resultWrapper" v-if="selectedSearch">
          <div id="exit" @click="selectedSearch=null">Exit</div>
          <div id="result">
            <h1>{{ selectedSearch[0] }}</h1>
            <p v-html="marked(selectedSearch[1])"></p>
          </div>
        </div>
        <div class="resultCategory"
          v-for="(resultSet, sectionName) in search()"
          :style="'background:'+sections[sectionName].theme"
          v-if="Object.keys(resultSet).length > 0">
          <div>
            <h2>{{ sections[sectionName].name }}</h2>
            <ol>
              <li @click="selectedSearch=sections[sectionName].file[result[0]]"
              v-for="result in resultSet">{{ sections[sectionName].file[result[0]][0] }}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionRenderer from './components/SectionRenderer';
import searchQ from '../search';
import mark from 'marked';

export default {
  data() {
    return {
      sections: this.$root.data.sections,
      query: "",
      selectedSearch: null,
    }
  },
  components: {
    'section-renderer': SectionRenderer
  },
  computed: {
    shouldSearch() {
      return this.query.length > 0;
    }
  },
  methods: {
    search() {
      if (!this.shouldSearch) return;
      return searchQ(this.query, this.$root.data.sections);
    },
    marked(c) {
      return mark(c);
    }
  },
  name: 'dashboard',
}
</script>
<style scoped lang="scss">
#sections, #searchResults {
  color: white;
}
li {
  margin: 13px 0;
  cursor: pointer;
}
#dashboardView {
  margin-top: 16px;
  position: relative;
}
#resultWrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
.resultCategory {
  padding: 1rem;
}
#result {
  position: absolute;
  top: 6rem;
  bottom: 6rem;
  left: 6rem;
  right: 6rem;
  background: white;
  padding: 1rem;
  color: black;
  z-index: 9;
  overflow: auto;
}
#resultWrapper #exit {
  position: absolute;
  top: 7rem;
  right: 8rem;
  color: black;
  z-index: 10;
  text-transform: uppercase;
  font-weight: bold;
  background: #eee;
  padding: 1rem;
  cursor: pointer;
}
#resultWrapper #exit:hover {
  padding: 1.3rem;
  top: 6.7rem;
  right: 7.7rem;
  background: #dedede;
}
#searchbar {
  margin-top: 2rem;
  text-align: center;
  input[type=text] {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    padding: 1rem;
    border-radius: 1rem;
    border: 0;
    width: 400px;
  }
}
#navbar {
  display: block;
  height: 72px;
}
#righthandside {
  position: absolute;
  top: 0;
  right: 0;
}
.circle {
  width: 72px;
  height: 72px;
  line-height: 72px;
  background: white;
  border-radius: 36px;
  text-align: center;
  background-size: 72px 72px;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  color: rgba(0,0,0,0);
  margin-right: 8px;
}
#points {
  color: black;
}
.avatar {
  background-size: auto 72px;
  background-position: center;
}
.container {
  text-align: left;
  color: black; 
}
#rhs {
  position: absolute;
  top: 0;
  right: 0;
}
#rhs .circle {
  font-size: 32px;
}
</style>
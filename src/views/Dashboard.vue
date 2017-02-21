<template>
  <div class="container">
    <div id="dashboardView">
      <div id="navbar">
        <div class="circle" id="points" title="Points">{{ this.$root.data.points }}</div>
        <div class="circle" :title="'Avatar for ' + this.$root.data.playerName " :style="'background-image:url('+this.$root.data.playerAvatar+')'"> .</div>
        <div id="rhs">
          <div class="circle" id="points" title="Points">⚙️</div>
          <div class="circle" id="points" title="Points">🏆</div>
          <div class="circle" id="points" title="Points">❔</div>
        </div>
      </div>
      <div id="searchbar">
        <input v-model="query" type="text" placeholder="Search for anything here..."></input>
      </div>
      <div class="container" id="sections" v-show="!query">
        <h1>Sections</h1>
        <section-renderer v-for="section in this.$root.data.sections" :section="section"></section-renderer>
      </div>
      <div class="container" id="searchResults" v-show="query">
        <h1>Search Results</h1>
        <div class="resultCategory" v-for="(resultSet, sectionName) in search()">
          <div v-if="Object.keys(resultSet).length > 0">
            <b>{{ sectionName }}</b>
            <ol>
              <li v-for="result in resultSet">{{ sections[sectionName].file[result[0]][0] }}</li>
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

export default {
  data() {
    return {
      sections: this.$root.data.sections,
      query: ""
    }
  },
  components: {
    'section-renderer': SectionRenderer
  },
  methods: {
    search() {
      return searchQ(this.query, this.$root.data.sections);
    }
  },
  name: 'dashboard',
}
</script>
<style scoped lang="scss">
#sections, #searchResults {
  color: white;
}
#dashboardView {
  margin-top: 16px;
  position: relative;
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
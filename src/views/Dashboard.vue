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
      <div class="container" id="sections">
        <h1>Sections</h1>
        <section-renderer
        v-for="section in this.$root.data.sections"
        :section="section"></section-renderer>
      </div>
    </div>
  </div>
</template>
<script>
import SectionRenderer from './components/SectionRenderer';

export default {
  components: {
    'section-renderer': SectionRenderer
  },
  name: 'dashboard',
}
</script>
<style scoped>
#sections {
  color: white;
}
#dashboardView {
  margin-top: 16px;
  position: relative;
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
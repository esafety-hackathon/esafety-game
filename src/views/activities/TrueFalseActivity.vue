<template>
<div class="activity truefalse">
  <h1>{{ activity.question }}</h1>
  <div class="circle yes" @click="select(true)">Yes</div>
  <div class="circle no" @click="select(false)">No</div>
</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      activity: this.$parent.section.activities[Number(this.$route.params.question)]
    }
  },
  methods: {
    select(option) {
      if (option === this.activity.answer) {
        this.$root.data.points += this.activity.points;
      } else {
        alert("Incorrect");
      }
      this.$emit('next');
    }
  }
}
</script>
<style>
.circle {
  width: 72px;
  height: 72px;
  display: inline-block;
  border-radius: 36px;
  line-height: 72px;
  font-weight: bold;
  background: white;
}
.yes {background: lime;}
.no {background: red;}
</style>
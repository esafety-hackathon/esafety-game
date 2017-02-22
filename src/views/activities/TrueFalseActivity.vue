<template>
<div class="activity truefalse">
  <div class="title">{{ activity.question }}</div>
  <div class="t" v-if="correct === null">
    <div class="button" @click="select(true)">Yes</div>
    <div class="button" @click="select(false)">No</div>
  </div>
  <div :class="'out ' + correct" v-if="correct !== null">{{ correct ? `Correct, it was ${activity.answer}` : `Incorrect, the answer was ${activity.answer}`}}!</div>
</div>
</div>
</template>
<script>
export default {
  props: ['activity'],
  data() {
    return {
      correct: null,
    }
  },
  methods: {
    select(option) {
      this.correct = option === this.activity.answer;
      if (this.correct) this.$root.data.points += this.activity.points;
    }
  }
}
</script>
<style scoped>

.out.true {
  background: #B2FF59;
  display: inline-block;
  margin-top: 8px;
  font-size: 18px;
  padding: 14px;
}

.out.false {
  background: #FF6E40;
  display: inline-block;
  margin-top: 8px;
  font-size: 18px;
  padding: 14px;
}

.truefalse {
  margin-bottom: 24px;
  border-left: 4px solid #999;
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.title {
  font-weight: bold;
  font-size: 20px;
}

.button {
  display: inline-block;
  padding: 8px;
  margin-top: 4px;
  margin-right: 8px;
  width: 32px;
  font-size: 20px;
  text-align: center;
  background: silver;
  cursor: pointer;
}

.button:hover {
  background: #ccc;
}
</style>
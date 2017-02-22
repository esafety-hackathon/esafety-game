<template>
<div class="activity truefalse">
  <div class="title">{{ activity.question }}</div>
  <div class="t" v-if="answer === null">
    <select v-model="answer" v-on:input="select()">
      <option v-for="answer in activity.answers" :value="answer">{{ answer }}</option>
    </select>
  </div>
  <div :class="'out ' + correct" v-if="answer !== null">{{ correct ? `Correct` : `Incorrect, the answer was: ${correctAnswer}`}}!</div>
</div>
</div>
</template>
<script>
export default {
  props: ['activity'],
  data() {
    return {
      answer: null,
    }
  },
  computed: {
    correct() {
      return this.correctAnswer === this.answer;
    },
    correctAnswer() {
      return this.activity.answers[this.activity.answer];
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

option, select {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
}

.button:hover {
  background: #ccc;
}
</style>
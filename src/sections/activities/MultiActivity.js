import Activity from './Activity';

export default class MultiActivity extends Activity {
  constructor(question, answers, answer, points = 1) {
    super('multi');
    this.question = question;
    this.answers = answers;
    this.answer = answer;
    this.points = points;
  }
}
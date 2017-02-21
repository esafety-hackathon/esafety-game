import Activity from './Activity';

export default class TrueFalseActivity extends Activity {
  constructor(question, answer, points = 1) {
    super('truefalse');
    this.question = question;
    this.answer = answer;
    this.points = points;
  }
}
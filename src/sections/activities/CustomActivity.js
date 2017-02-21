import Activity from './Activity';

export default class CustomActivity extends Activity {
  constructor(component) {
    super('custom');
    this.component = component;
  }
}
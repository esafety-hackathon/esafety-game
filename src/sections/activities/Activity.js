export default class Activity {
  constructor(type) {
    if (!type) throw new Error('Activity has no type');
    this.type = type;
    this.section = null;
  }
}

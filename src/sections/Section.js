export default class Section {
  constructor({name, desc, theme, textColor, activities, file} = options) {
    this.name = name;
    this.desc = desc;
    this.theme = theme;
    this.textColor = textColor;
    this.activities = activities || [];
    this.file = file;
  }

  get totalPoints() {
    return this.activities.reduce((previous, current) => previous + current.points, 0);
  }

  addActivity(activity) {
    activity.section = this;
    this.activities.push(activity);
    return this;
  }
}
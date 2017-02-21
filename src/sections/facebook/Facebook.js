import Section from '../Section';
import Activities from '../activities/Activities';

const facebook = new Section({
  name: 'Facebook', // name of the section
  desc: 'Learn more about staying safe on Facebook', // description of the section
  theme: '#3B5998', // colour theme of the section
  textColor: 'white', // text colour
});

facebook.addActivity(new Activities.TrueFalseActivity('test', false));
facebook.addActivity(new Activities.TrueFalseActivity('test 2', true));

export default facebook;

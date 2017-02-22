import Section from '../Section';
import Activities from '../activities/Activities';

const facebook = new Section({
  name: 'Facebook', // name of the section
  desc: 'Learn more about staying safe on Facebook', // description of the section
  theme: '#3B5998', // colour theme of the section
  textColor: 'white', // text colour
  file: require('./data')
});

facebook.addActivity(new Activities.TrueFalseActivity('test', false));
facebook.addActivity(new Activities.TrueFalseActivity('test 2', true));
facebook.addActivity(
  new Activities.MultiActivity(
    'question here', // question for the activity
    ['answer 1', 'answer 2', 'answer 3'], // possible answers
    0,
  )
); // the item in the possible answers that is right (in this it's index 0 so the first answer)

export default facebook;

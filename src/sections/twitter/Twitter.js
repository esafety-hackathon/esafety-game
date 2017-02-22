import Section from '../Section';
import Activities from '../activities/Activities';

const twitter = new Section({
    name: 'Twitter', // name of the section
    desc: 'Learn more about staying safe on Twitter', // description of the section
    theme: '#1B95E0', // colour theme of the section
    textColor: 'white', // text colour,
    file: require('./data'),
});

twitter.addActivity(
  new Activities.MultiActivity(
    'What should you post on your Twitter feed?', // question for the activity
    ['Your controversial political views', 'Every thought that pops into your mind', 'Your views on current affairs in the world',
    'Your opinion on the hackathon food'], // possible answers
    3,
  )
); // the item in the possible answers that is right (in this it's index 0 so the first answer)


export default twitter;

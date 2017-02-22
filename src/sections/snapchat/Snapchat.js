import Section from '../Section';
import Activities from '../activities/Activities';

const snapchat = new Section({
    name: 'Snapchat', // name of the section
    desc: 'Learn more about staying safe on Snapchat', // description of the section
    theme: '#D5DE2A', // colour theme of the section
    textColor: 'white', // text colour,
    file: require('./data'),
});

snapchat.addActivity(
  new Activities.MultiActivity(
    'What should you send on Snapchat?', // question for the activity
    ['Provocative images', 'Spam to people you don\'t like', 
     'Your daily activities that you think others would find intersting', 'Offensive images to bully people'], // possible answers
    3,
  )
); // the item in the possible answers that is right (in this it's index 0 so the first answer)


export default snapchat;

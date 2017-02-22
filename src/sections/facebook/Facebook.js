import Section from '../Section';
import Activities from '../activities/Activities';

const facebook = new Section({
  name: 'Facebook', // name of the section
  desc: 'Learn more about staying safe on Facebook', // description of the section
  theme: '#3B5998', // colour theme of the section
  textColor: 'white', // text colour
  file: require('./data')
});

/*facebook.addActivity(new Activities.TrueFalseActivity('test', false));
facebook.addActivity(new Activities.TrueFalseActivity('test 2', true));*/

facebook.addActivity(
  new Activities.MultiActivity(
    'Who should I friend on Facebook?', 
    ['Everybody you see', 'People you have met in real life', 'People you have met online through games.etc', 'Close family and friends'],
    1, //Right Answer
  )
); 

facebook.addActivity(
  new Activities.MultiActivity(
    'What information should i put on my Facebook profile?', 
    ['None', 'Name, Address, Credit card number, National Insurance number and Date of Birth', 
     'Name, hometown and age', 'All the possible information that you can put on it'],
    2, //Right Answer
  )
); 

facebook.addActivity(
  new Activities.MultiActivity(
    'What should you use your Facebook profile for?', 
    ['To bully people', 'To stalk your ex', 'To find new memes', 'To talk to friends and families and to see how their lives are going'],
    3, //Right Answer
  )
); 

export default facebook;

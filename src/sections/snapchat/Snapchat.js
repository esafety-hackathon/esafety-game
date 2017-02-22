import Section from '../Section';
import Activities from '../activities/Activities';

const snapchat = new Section({
    name: 'Snapchat', // name of the section
    desc: 'Learn more about staying safe on Snapchat', // description of the section
    theme: '#D5DE2A', // colour theme of the section
    textColor: 'white', // text colour,
    file: require('./data'),
});

snapchat.addActivity(new Activities.TrueFalseActivity(`What should you send on snapchat? 
1. Provocative pictures
2. Inappropriate images
3. Normal pictures of your daily activities
4. Spam to people you don’t like`, true)); 

export default snapchat;
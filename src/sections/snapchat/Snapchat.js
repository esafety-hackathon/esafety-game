import Section from '../Section';
import Activities from '../activities/Activities';

const snapchat = new Section({
    name: 'Snapchat', // name of the section
    desc: 'Learn more about staying safe on Snapchat', // description of the section
    theme: '#D5DE2A', // colour theme of the section
    textColor: 'white', // text colour,
    file: require('./data'),
});

snapchat.addActivity(new Activities.TrueFalseActivity('OK', true));

export default snapchat;
import Section from '../Section';
import Activities from '../activities/Activities';

const snapchat = new Section({
    name: 'Snapchat', // name of the section
    desc: 'Learn more about staying safe on Snapchat', // description of the section
    theme: '#FFFC00', // colour theme of the section
    textColor: 'white', // text colour
});

snapchat.addActivity(new Activities.TrueFalseActivity('OK', true));

export default snapchat;
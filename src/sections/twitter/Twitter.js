import Section from '../Section';
import Activities from '../activities/Activities';

const twitter = new Section({
    name: 'Twitter', // name of the section
    desc: 'Learn more about staying safe on Twitter', // description of the section
    theme: '#1B95E0', // colour theme of the section
    textColor: 'white', // text colour
});

twitter.addActivity(new Activities.TrueFalseActivity('OK', true));

export default twitter;

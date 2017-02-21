import Section from '../Section';
import Activities from '../activities/Activities';

const instagram = new Section({
    name: 'Instagram', // name of the section
    desc: 'Learn more about staying safe on Instagram', // description of the section
    theme: 'blue', // colour theme of the section
    textColor: 'white', // text colour
});

instagram.addActivity(new Activities.TrueFalseActivity('OK', true));

export default instagram;
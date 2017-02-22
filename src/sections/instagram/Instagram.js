import Section from '../Section';
import Activities from '../activities/Activities';

const instagram = new Section({
    name: 'Instagram', // name of the section
    desc: 'Learn more about staying safe on Instagram', // description of the section
    theme: 'url(https://stephencastleberry.files.wordpress.com/2016/05/instagram-background.jpg)', // colour theme of the section
    textColor: 'white', // text colour
    file: require('./data')
});

instagram.addActivity(new Activities.TrueFalseActivity('OK', true));

export default instagram;
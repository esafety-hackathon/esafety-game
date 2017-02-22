import Section from '../Section';
import Activities from '../activities/Activities';
import PasswordSecurityComponent from './PasswordSecurity.vue';

const passwordSecurity = new Section({
    name: 'Password Security', // name of the section
    desc: 'Learn more about keeping your passwords safe and secure', // description of the section
    theme: '#08A65C', // colour theme of the section
    textColor: 'white', // text colour
    file: require('./data'),
});

passwordSecurity.addActivity(new Activities.CustomActivity(PasswordSecurityComponent));

export default passwordSecurity;

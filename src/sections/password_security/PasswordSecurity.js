import Section from '../Section';
import Activities from '../activities/Activities';
import PasswordSecurityComponent from './PasswordSecurity.vue';

const passwordSecurity = new Section({
    name: 'Password Security', // name of the section
    desc: 'Learn more about staying safe on Twitter', // description of the section
    theme: '#24A8F0', // colour theme of the section
    textColor: 'white', // text colour
});

passwordSecurity.addActivity(new Activities.CustomActivity(PasswordSecurityComponent));

export default passwordSecurity;

import Section from '../Section';
import Activities from '../activities/Activities';
import PasswordSecurityComponent from './PasswordSecurity.vue';

const passwordSecurity = new Section({
    name: 'Twitter', // name of the section
    desc: 'Learn more about staying safe on Twitter', // description of the section
    theme: '#1B95E0', // colour theme of the section
    textColor: 'white', // text colour
});

passwordSecurity.addActivity(new Activities.CustomActivity(PasswordSecurityComponent));

export default passwordSecurity;

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

instagram.addActivity(
  new Activities.MultiActivity(
    'What should you put on your Instagram feed?', // question for the activity
    ['Spam images', 'Pictures stolen from other people', 'Activites that you have done and pictures you have taken yourself',
     'Provacative and offensive images'], // possible answers
    2,
  )
); // the item in the possible answers that is right (in this it's index 0 so the first answer)


export default instagram;

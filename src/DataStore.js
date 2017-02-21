import facebook from './sections/facebook/Facebook';
import snapchat from './sections/snapchat/Snapchat';
import instagram from './sections/instagram/Instagram';
import twitter from './sections/twitter/Twitter';
import passwordSecurity from './sections/password_security/PasswordSecurity.js';

const datastore = {
  points: 0,
  playerName: null,
  playerAvatar: null,
  sections: {
    facebook,
    snapchat,
    instagram,
    twitter,
    passwordSecurity,
  },
  avatars: [
    'https://vuejs.org/images/logo.png',
    'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx',
    'https://vuejs.org/images/logo.png',
    'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx',
    'https://vuejs.org/images/logo.png',
    'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx',
    'https://vuejs.org/images/logo.png',
    'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx',
  ]
};

export default datastore;

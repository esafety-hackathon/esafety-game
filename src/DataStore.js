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
    'http://icons.veryicon.com/ico/Avatar/Halloween%20Avatars/mask%203.ico',
    'http://www.uidownload.com/files/33/695/804/avatar-face-icon.png',
    'http://findicons.com/files/icons/1072/face_avatars/300/d05.png',
    'https://s.tmimgcdn.com/blog/wp-content/uploads/2015/12/Free-Set-of-Star-Wars-Avatars-Vol-2-The-Emperor-by-Oxygenna.jpg?x13891',
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPKLP1Lxza_tsObUNbVAR4NoiJkhF6EoAUFsXIxfaXINQ7BV_PbQ',
    'http://steamavatars.co/?media_dl=2456',
    'http://m.memegen.com/t7mxfo.jpg',
  ]
};

export default datastore;

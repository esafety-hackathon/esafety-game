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
    'http://findicons.com/files/icons/1072/face_avatars/300/d05.png',
    'https://bdobase.info/img/users/avatars/71.png',
    'http://www.puzzelo.com/assets/images/profiles/profile-1.png',
    'http://www.iconarchive.com/download/i47408/hopstarter/face-avatars/Female-Face-FB-3.ico',
    'http://icons.veryicon.com/ico/Avatar/Halloween%20Avatars/mask%203.ico',
    'http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Frankenstein-icon.png',
    'http://www.iconarchive.com/download/i51026/hopstarter/halloween-avatars/Alien.ico',
    'http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Mask-4-icon.png',
    'http://www.iconarchive.com/download/i51031/hopstarter/halloween-avatars/Clown-2.ico',
    'http://megaicons.net/static/img/icons_sizes/126/304/512/bioman-avatar-3-blue-icon.png',
    'http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Grim-Reaper-icon.png',
    'http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Voodoo-Doll-icon.png',
    'http://icons.iconarchive.com/icons/hopstarter/brown-monsters/1024/Brown-Monsters-01-icon.png',
    'http://www.avatarsdb.com/avatars/spongebob_squarepants_2.gif',
    'http://m.memegen.com/t7mxfo.jpg',
  ]
}; // Must continue avatar choices onto second line

export default datastore;

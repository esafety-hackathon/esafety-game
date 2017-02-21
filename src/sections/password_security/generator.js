function randomNumber(limit = 10) {
  return Math.floor(Math.random() * limit);
}

function randomFromList(list) {
  return list[randomNumber(list.length)]
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generatePassword() {
  /*
    - at least 8 characters
     - uppercase letters
     - lowercase letters
     - numbers
     - symbols, such as a lot of them
  */
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = lowerLetters.toUpperCase();
  const symbols = '!"#$%&()*+,-./'

  const characters = 8;

  var password = [];
  var i = 0;
  
  while(i < characters) {
    if (i < 2) {
      password.push(randomFromList(upperLetters));
    } else if(i < 4) {
      password.push(randomFromList(lowerLetters));
    } else if(i < 6) {
      password.push(randomNumber(10));
    } else {
      password.push(randomFromList(symbols))
    }
    i++;
  }

  return shuffle(password).join('');
}

export default generatePassword;
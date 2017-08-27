var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById('messageArea');
    // console.log(messageArea);
    messageArea.innerHTML = msg;
  },

  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute('class', 'hit');
  },

  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute('class', 'miss');
  },
};

var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [
    { locations: ['06', '16', '26'], hits: ['', '', ''] },
    { locations: ['24', '34', '44'], hits: ['', '', ''] },
    { locations: ['10', '11', '12'], hits: ['', '', ''] },
  ],

  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = 'hit';
        view.displayHit(guess);
        view.displayMessage('Trafiony!');
        if (this.isSunk(ship)) {
          view.displayMessage('Zatipiłeś okręt!');
          this.shipsSunk++;
        }

        console.log(this.shipsSunk);
        return true;
      }

      view.displayMiss(guess);
      view.displayMessage('Spudłowałeś!');
      return false;
    }
  },

  isSunk: function (ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== 'hit') {
        return false;
      }

      console.log('isSunk - true');
      return true;
    }
  },
}; //koniec model

var controller = {
  guesses: 0,

  processGuess: function (guess) {

  },
};

function parseGuess(guess) {

  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  if (guess === null || guess.length !== 2) {
    alert('Ups, Proszę wpisać literę i cyfrę');
  } else {
    var firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert('Ups, to nie są prawidłowe współrzędne');
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
      alert('Ups, pole poza planszą!');
    } else {
      return row + column;
    }

    return null;
  };
}

model.fire('06');
model.fire('16');
model.fire('56');

// console.log(model.ships[0]);


console.log(parseGuess('A0'));
console.log(parseGuess('A1'));
console.log(parseGuess('B4'));
console.log(parseGuess('F4'));

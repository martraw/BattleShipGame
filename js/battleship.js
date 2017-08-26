var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById('messageArea');
    console.log(messageArea);
    messageArea.innerHTML = msg;
  },

  displayHit: function (location) {
    var cell = document.getElementById(location);
    console.log(cell);
    cell.setAttribute('class', 'hit');
  },

  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute('class', 'miss');
  },
};

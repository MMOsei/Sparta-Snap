$(document).ready(function(){

  var colours = [
  'red',
  'yellow',
  'orange',
  'blue',
  'green',
  'purple',
  'white',
  'black',
  'purple',
  'white',
  'blue',
  'green',
  'orange',
  'black',
  'yellow',
  'red'
  ];
  console.log(colours);
ge
  var box = document.getElementsByClassName('box');
  console.log(box);
  var boxes = [...box]
  console.log(boxes);
  // // var lettersArray;
  var index = Math.floor(Math.random() * colours.length);
  console.log(index);
  console.log(colours.length);
  // //var id;
  // //var livesLeft = 6;
  //
  //
  //This generates a random word to be guessed
  $('#play').one('click', function () {
    $('#play').toggle();
  //   //submitGuess();
  //   //$('.game-area').toggle(); //turns on the game area once the play button is clicked
  //
    for (var i = 0; i < colours[index]; i++) {
      // var box = $('<div class="box">' + colours + '</div>');
      $('.box').html(colours);
    }
  //   // $('#current-score').html(livesLeft);
  //   // move();
  });
  //
  //

});

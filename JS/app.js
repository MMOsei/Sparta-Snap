$(document).ready(function(){

  // var colours = [
  // 'red',
  // 'yellow',
  // 'orange',
  // 'blue',
  // 'green',
  // 'purple',
  // 'white',
  // 'black',
  // 'purple',
  // 'white',
  // 'blue',
  // 'green',
  // 'orange',
  // 'black',
  // 'yellow',
  // 'red'
  // ];
  // console.log(colours);

  var box = document.getElementsByClassName('box');
  // console.log(box);
  var boxes = [...box]
  console.log(boxes);

  var click1 = "";
  var click2 = "";

  // // var lettersArray;
  // var index = Math.floor(Math.random() * colours.length);
  // console.log(index);
  // console.log(colours.length);
  // //var id;
  // //var livesLeft = 6;


  $(this).click(function(event){

    if (click1 == "") {
      click1 = event.target.innerHTML;
      console.log(click1);
    } else {
      click2 = event.target.innerHTML;
      console.log(click2);
    }
  });
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

  // var = colourAtPlay

  // pseudo code: box.click(function(){
  // colourAtPlay = this.val() or html()
  //
  //
  //
  //

});

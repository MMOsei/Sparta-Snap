$(document).ready(function(){

  var box = document.getElementsByClassName('box');
  var boxes = [...box];
  var click1 = "";
  var click2 = "";
  var win = 0;

  // $('#play').one('click', function () {
  //   $('#the-grid').toggle();
  //   $('#play').toggle();
  // });

  //-------------------------------------

  shuffle();

  $(this).click(function(event){
    gamePlayClick();
  });

//-------------------------------------

  //This is the shuffle function
  function shuffle() {
    var myArray = boxes;
    var currentPass = myArray.length;
    var index, temp;

    while (currentPass >0) {
      index = Math.floor(Math.random()*currentPass);
      currentPass--;

      temp = myArray[currentPass];
      myArray[currentPass] = myArray[index];
      myArray[index] = temp;
    } // while loop closing bracket
    for (var i = 0; i < myArray.length; i++) {
        boxes = $('<div class="box">' + myArray + '</div>');
        $('#the-grid').append(myArray);
        // $('.box').append.addClass("white");
      } // for loop closing bracket
  } // shuffle fintion close

  // Function that controls the game play clicks
  var count = 0;
  function gamePlayClick() {

    if (click1 == "") {
      click1 = event.target.innerHTML;
      count++;
      console.log(click1);
      console.log(count);
    } else {
      click2 = event.target.innerHTML;
      count++;
      console.log(click2);
      console.log(count);

      // winning condition
      if (click1 === click2) {
        win++;
        console.log('I\'ts a match!');
        console.log('matched ' + win);
        if (win == 8) {
        console.log('Winner');
        click1 = '';
        click2 = '';
        }  else {
        console.log('That\'s not a match' + count);
        click1 = '';
        click2 = '';
        } // Second level if statement close
      } //First level if statement close
    } // else statement close
    //losing condition
    if (count == 20) {
      console.log('You lose!!');
    } // Lose condition if statement close
  } // Function close


});

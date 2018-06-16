$(document).ready(function(){
  $('#the-grid').toggle();
  // hide();

  var box = document.getElementsByClassName('box');
  // console.log(box);
  var boxes = [...box];
  // console.log(boxes);

  var click1 = "";
  var click2 = "";
  var index = Math.floor(Math.random() * boxes.length);

  // console.log(index);

  // // var lettersArray;
  // console.log(index);
  // console.log(colours.length);
  // //var id;


  $('#play').one('click', function () {
    $('#the-grid').toggle();
    $('#play').toggle();
    shuffle();
  });


// if ($('#play') == (":hidden")) {

  $(this).click(function(event){
    // $('.white').toggle();
    // var currentBox = event.target.innerHTML
    // console.log(currentBox);
    // console.log(event);
    gamePlayClick();
  });
// }
  //


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
    }

    console.log(myArray);
  // document.getElementByClassName('box') = myArray;
  for (var i = 0; i < myArray.length; i++) {
      boxes = $('<div class="box">' + myArray + '</div>');
      $('#the-grid').append(myArray);
    }

  }



  // Function that controlls the game play clicks

  var count = 0;
  function gamePlayClick() {
    // for (var i = 0; i < 2; i++) {

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
        // if the 2 clicks match then leave it uncovered
        if (click1 === click2) {
          console.log('I\'ts a match!');
          // if they do not match then they should hide again

          click1 = '';
          click2 = '';
        }  else {
          count = 0;
          console.log('That\'s not a match' + count);
          click1 = '';
          click2 = '';
        } // Second level if statement close
      } //First level if statement close
    // } // For loop close
  } // Function close



});

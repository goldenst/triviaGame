console.log('from app.js')
var time = 60;
var count = 0
var intervalId;

$( document ).ready(function() {
  $('#title').html("<h1>Trivial Trivia</h1>")
  $('#questions').text("have a Great day");
  $('#timmer').html('<h3>Time remaning to play: ' + time + ' Seconds.</h3>');
  $('#startGame').on('click', start);
  function start(){
      setInterval(count, 1000);
  }
 

function count(){
  time--
}

});

console.log('from app.js')
var count = 60;
var intervalId;
var correct = 0;

$( document ).ready(function() {
  
   
  $('#title').html("<h1>Trivial Trivia</h1>");
  $('#questions').text("have a Great day");
  //$('#timmer').html('<h3>Time remaning to play: ' + count + ' Seconds.</h3>');
  $('#startGame').on('click', start);

  function start(){  
  
  $('#timmer').html('<h3>Time remaning to play: ' + count + ' Seconds.</h3>');
  }
 
  $("input:radio[name=q1]").click(function() {
    $('#q1').html('Correct Answer: ' + " 1994  Score= ");
    $('#q1').append($(this).val());
    if ( $('input[name=q11]').prop('checked', true)) {
      correct++
    }
    checkscore()
   });

  $("input:radio[name=q2]").click(function() {
    $('#q2').html('Correct Answer: ' + " Captain Steven Hiller  Score= ");
    $('#q2').append($(this).val());
    if ( $('input[name=q22]').prop('checked', true)) {
      correct++
    }
    checkscore()
   });

   $("input:radio[name=q3]").click(function() {
    $('#q3').html('Correct Answer: ' + " 7  Score= ");
    $('#q3').append($(this).val());
    if ( $('input[name=q33]').prop('checked', true)) {
      correct++
    }
    checkscore()
   });

   $("input:radio[name=q4]").click(function() {
    $('#q4').html('Correct Answer: ' + " 1994  Score= ");
    $('#q4').append($(this).val());
    if ( $('input[name=q44]').prop('checked', true)) {
      correct++
    }
    checkscore()
   });

   $("input:radio[name=q5]").click(function() {
    $('#q5').html('Correct Answer: ' + " The Bodyguard  Score= ");
    $('#q5').append($(this).val());
    if ( $('input[name=q5]').prop('checked', true)) {
      correct++
    }
    checkscore()
   });

   $("input:radio[name=q6]").click(function() {
    $('#q6').html('Correct Answer: ' + " Hurcules  Score= ");
    $('#q6').append($(this).val());
    if ( $('input[name=q6]').prop('checked', true)) {
      correct++
    }
    checkscore()
   });

   $("input:radio[name=q7]").click(function() {
    $('#q7').html('Correct Answer: ' + " 1994  Score= ");
    $('#q7').append($(this).val());
    if ( $('input[name=q7]').prop('checked', true)) {
      correct++
    }
    checkscore()
   });

   $("input:radio[name=q8]").click(function() {
    $('#q8').html('Correct Answer: ' + " Mulan  Score= ");
    $('#q8').append($(this).val());
    if ( $('input[name=q8]').prop('checked', true)) {
      correct++
    }
    checkscore()
   });

   $("input:radio[name=q9]").click(function() {
    $('#q9').html('Correct Answer: ' + " Val Kilmer  Score= ");
    $('#q9').append($(this).val());
    if ( $('input[name=q9]').prop('checked', true)) {
      correct++
    }
    checkscore()
   });

   $("input:radio[name=q10]").click(function() {
    $('#q10').html('Correct Answer: ' + " Toy Story  Score= ");
    $('#q10').append($(this).val());
    if ( $('input[name=q10]').prop('checked', true)) {
      correct++
    }
    checkscore()
    
});
checkscore()
});

function checkscore (){
  console.log('score: ' + correct)
 }
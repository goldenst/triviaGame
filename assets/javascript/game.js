//console.log('from game js');

var correct = 0;

$(document).ready(function () {
showrules()

  function showrules () {

    $('.gameRules').html(`<h2>Game Rules</h2> <p>You have 45 Seconds to answer 10 Questions about the 90's Movie Trivia
     <p> Press the Start Button to begin</p>`)
    
  }

  $('#title').html("<h1>90's Movie Trivial Trivia</h1>");
  $('#startGame').on('click', start);

// ###################  Timmer ######################
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 45;

function start() {

  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
    $(".question-area").css("display", "block");
    $('.gameRules').css("display", "none");
  } 
}

function stop() {
  
  // DONE: Use clearInterval to stop the count here and set the clock to not be running.
  clearInterval(intervalId);
  clockRunning = false; 
  time = 5;
}

function count() {
  // DONE: increment time by 1, remember we cant use "this" here.
  time--;
  // DONE: Get the current time, pass that into the timeConverter function,
  //       and save the result in a variable.
  var converted = timeConverter(time);
  //console.log(converted + ' Time Remaning');

  // DONE: Use the variable we just created to show the converted time in the "display" div.
  $("#timmer").text(converted + ' Time Remaning');
  if (time === 0) {
    stop();
    endGame();
  }
}

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
 //  hide Questions and show score
  function endGame () {
  $('#questions').html(`<h2>Congratulations you Got ${correct} Answers Correct!</h2>` );
  }

  //// ########################## game logic ###############################

  // get user selection from question
  $("input:radio[name=q1]").click(function () {
    // remove radio buttons and display correct awnser
    $('#q1').html('Correct Answer: ' + " 1994");
    // if answer is correct add to count
    if ($(this).val() === 'true') {
      correct++
    }
  });

  $("input:radio[name=q2]").click(function () {
    $('#q2').html('Correct Answer: ' + " Captain Steven Hiller");
    
    if ($(this).val() === 'true') {
      correct++
    }
  });

  $("input:radio[name=q3]").click(function () {
    $('#q3').html('Correct Answer: ' + " 7");
    
    if ($(this).val() === 'true') {
      correct++
    }
  });

  $("input:radio[name=q4]").click(function () {
    $('#q4').html('Correct Answer: ' + " 1994");

    if ($(this).val() === 'true') {
      correct++
    }
  });

  $("input:radio[name=q5]").click(function () {
    $('#q5').html('Correct Answer: ' + " The Bodyguard");

    if ($(this).val() === 'true') {
      correct++
    }
  });

  $("input:radio[name=q6]").click(function () {
    $('#q6').html('Correct Answer: ' + " Hurcules");

    if ($(this).val() === 'true') {
      correct++
    }
  });

  $("input:radio[name=q7]").click(function () {
    $('#q7').html('Correct Answer: ' + " 1994");

    if ($(this).val() === 'true') {
      correct++
    }
  });

  $("input:radio[name=q8]").click(function () {
    $('#q8').html('Correct Answer: ' + " Mulan");

    if ($(this).val() === 'true') {
      correct++
    }
  });

  $("input:radio[name=q9]").click(function () {
    $('#q9').html('Correct Answer: ' + " Val Kilmer");

    if ($(this).val() === 'true') {
      correct++
    }
  });

  $("input:radio[name=q10]").click(function () {
    $('#q10').html('Correct Answer: ' + " Toy Story");

    if ($(this).val() === 'true') {
      correct++
    }
  });
 
});


// TODOs #########################
  


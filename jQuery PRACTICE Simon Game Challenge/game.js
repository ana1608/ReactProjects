var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").on("click", function (events) {
  var userChosenColour = "";
  userChosenColour = "" + events.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress("#" + userChosenColour, "pressed", 100);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(userlength) {
  if (gamePattern[userlength] === userClickedPattern[userlength]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    animatePress("body", "game-over", 200);
    playSound("wrong");
    $("#level-title").text("Game Over, Press A Key to Start");
    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);

  $("#level-title").text("Level " + level);
}

function playSound(sound) {
  var audio = new Audio("sounds/" + sound + ".mp3");
  audio.play();
}

function animatePress(userChosenColour, classname, time) {
  $(userChosenColour).addClass("" + classname);
  setTimeout(() => {
    $(userChosenColour).removeClass("" + classname);
  }, time);
}

function startOver() {
  started = false;
  level = 0;
  gamePattern = [];
}

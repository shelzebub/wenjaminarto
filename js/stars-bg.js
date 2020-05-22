//Global Variables
// Stars //
var initial = window.scrollY;
var scrolledAmt = 0;
var initial2 = window.scrollY;
var scrolledAmt2 = 0;
var currentYear = new Date().getFullYear();
var body = document.body;
var html = document.documentElement;

var height =
  Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) * -1;
var heightOverflow = height - 2000;

//random number generator
function randomIntGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//random size
function randomSize() {
  var randSize = "30px";
  switch (randomIntGenerator(0, 3)) {
    case 0:
      randSize = "30px";
      break;
    case 1:
      randSize = "35px";
      break;
    case 2:
      randSize = "28px";
      break;
    default:
      break;
  }
  return randSize;
}

//random opacity
function randomOpacity() {
  var randOpac = "1";
  switch (randomIntGenerator(0, 3)) {
    case 0:
      randOpac = "0.9";
      break;
    case 1:
      randOpac = "0.68";
      break;
    case 2:
      randOpac = "0.5";
      break;
    default:
      break;
  }
  return randOpac;
}

//random position
function randomPos(min, max) {
  return randomIntGenerator(min, max) + "px";
}

//generate star
function makeStar(group, height, opacity, yPos) {
  var star = document.createElement("img");
  if (group == 1) {
    star.setAttribute("src", "./images/star.png");
    star.setAttribute("class", "bg-star");
  } else {
    star.setAttribute("src", "./images/star-shine.png");
    star.setAttribute("class", "bg-star-two");
  }
  star.setAttribute("height", height);
  star.style["opacity"] = opacity;
  star.style["top"] = yPos;
  star.style["z-index"] = "-4";
  star.style["position"] = "relative";
  //   star.style["transform"] = "rotate(45deg)";
  star.setAttribute("alt", "");
  document.body.appendChild(star);
}

//generate stars
function makeStars(minNumOfStars, maxNumOfStars) {
  var randNumOfStars = randomIntGenerator(minNumOfStars, maxNumOfStars);
  for (var i = 0; i < randNumOfStars; i++) {
    makeStar(randomIntGenerator(1, 2), randomSize(), randomOpacity(), randomPos(heightOverflow, 0));
  }
}

//make stars sparkle
function makeStarsSparkle(stars) {
  if (stars.hasClass("shine")) {
    stars.removeClass("shine");
  } else {
    stars.addClass("shine");
  }
}

// loading handlers
function initializeEvents() {
  //scroll listener
  $(window).scroll(function() {
    //star group 1
    var scrolling = Math.trunc(window.scrollY) - initial;
    if (scrolledAmt < 10000) {
      //didn't scroll enough yet
      scrolledAmt += Math.abs(scrolling);
    } else {
      //make it sparkle
      let stars = $(".bg-star");
      makeStarsSparkle(stars);
      initial = window.scrollY; // set new initial position
      scrolledAmt = 0;
    }

    //star group 2
    var scrolling2 = Math.trunc(window.scrollY) - initial2;
    if (scrolledAmt2 < 2000) {
      //didn't scroll enough yet
      scrolledAmt2 += Math.abs(scrolling2);
    } else {
      //make it sparkle
      let stars = $(".bg-star-two");
      makeStarsSparkle(stars);
      initial2 = window.scrollY; // set new initial position
      scrolledAmt2 = 0;
    }
  });
}

// making stars
$(function() {
  initializeEvents();
  makeStars(80, 110);
});

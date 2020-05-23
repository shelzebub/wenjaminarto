//Global Variables
var currentYear = new Date().getFullYear();
var copyRight = "Copyright &copy; " + currentYear + " Shely Lin - All rights reserved ";

// shrinking navbar
function checkForNavShrink(scrolledPixels) {
  if (screen.width <= 699) {
    let navbar = $("nav.navbar");
    if (scrolledPixels > 300) {
      navbar.find("#logo img, .nav-link, #logoName").addClass("shrink");
    } else {
      navbar.find("#logo img, .nav-link, #logoName").removeClass("shrink");
    }
  } else {
    let navbar = $("nav.navbar");
    if (scrolledPixels > 900) {
      navbar.find("#logo img, .nav-link, #logoName").addClass("shrink");
    } else {
      navbar.find("#logo img, .nav-link, #logoName").removeClass("shrink");
    }
  }
}

function checkForMobileNavShrink(scrolledPixels) {
  let navbar = $("#navHome");
  if (scrolledPixels > 900) {
    navbar.addClass("shrink");
  } else {
    navbar.removeClass("shrink");
  }
}

// loading handlers
function initializeEvents() {
  //scroll listener
  $(window).scroll(function () {
    // shrinking navbar
    checkForNavShrink($(this).scrollTop());
    checkForMobileNavShrink($(this).scrollTop());
  });

  // onclick listener
  $("#logo").click(() => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  });
  $(".nav-home").click(() => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  });
  $("#navMyWorks").click(() => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.querySelector("#myWorks").offsetTop,
    });
  });
  $("#navAboutMe").click(() => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.querySelector("#aboutMe").offsetTop,
    });
  });
  $("#navContactMe").click(() => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.querySelector("#contactMe").offsetTop,
    });
  });

  // icon bounce animation on hover
  $(".icon-img").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
    $(this).removeClass("animate-bounce");
  });

  $(".icon-img").hover(function () {
    $(this).addClass("animate-bounce");
  });
}

$(function () {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  initializeEvents();
  $("#copyRight").html(copyRight);
});

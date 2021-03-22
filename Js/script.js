let loaderWrapper = document.querySelector('.loader-wrapper');
// let bg = document.getElementById("bg");
// let moon = document.getElementById("moon"); 
// let mountain = document.getElementById("mountain");
// let road = document.getElementById("road");
// let text = document.getElementById("text");
// var xScrollPosition;
// var yScrollPosition;
// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);

// function setTranslate(xPos, yPos, el) {
//     el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
// }   

// function scrollLoop() {
//     xScrollPosition = window.scrollX;
//     yScrollPosition = window.scrollY;

//     setTranslate(0,yScrollPosition * 0.7, moon);
//     setTranslate(0, yScrollPosition * 0.5, bg);
//     setTranslate(0, yScrollPosition * -0.15, mountain);
//     setTranslate(0, yScrollPosition * 0.15, road);
//     setTranslate(0, yScrollPosition * 0.6, text);

//     requestAnimationFrame(scrollLoop);
// }

// window.addEventListener("DOMContentLoaded", scrollLoop, false);


// window.addEventListener('scroll', function() 
// { 
//     var value = window.scrollY;
//     moon.style.left= -value*0.5 + 'px';
// })

//  loader script

window.addEventListener('load', function () {
    loaderWrapper.parentElement.removeChild(loaderWrapper);
});

// populate stars
function Stars(numberOfStars, divID){
    var chosenDiv = document.getElementById(divID)  
    chosenDiv.style.display = "none";
    chosenDiv.innerHTML = "";
    function randomFrom(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    var text = "";
    var i; 
    for (i = 0; i < numberOfStars; i++) {
        bigRange = Array.apply(null, Array(100)).map(function (_, i) {return i;});
        smallRange = Array.apply(null, Array(3)).map(function (_, i) {return i;});
        tenRange = Array.apply(null, Array(5)).map(function (_, i) {return i;});
        starTwinkleStage = randomFrom("9","13");
        var top = randomFrom(bigRange); 
        var right = randomFrom(bigRange); 
        var width = randomFrom(smallRange);
        text += "<style></style>";
        text += "<div class='stars' style='top:" + top + "%; right: "+ right +"%; width:" + width + "px; height:" + width + "px;";
        text += "animation: twinkling " + starTwinkleStage + "s infinite";
        text += ";box-shadow: 0px 0px 1vw rgba(255, 255, 255, 0.2);'></div>";
        chosenDiv.innerHTML = text;
        chosenDiv.style.display = "block";
    }
}
  
// Function(How many stars, id that you want populating)
Stars(40, "starry");
Stars(100, "starry1");

// Mission Vision Header
anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 5000
  });
  
// Events header
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 3000,
    delay: (el, i) => 100 + 30 * i
  });

  var textWrapper = document.querySelector('.ml12');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml12 .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 2200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.ml12 .letter',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 2200,
      delay: (el, i) => 100 + 30 * i
    });
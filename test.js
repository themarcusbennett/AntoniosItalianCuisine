var individualChoice1 = document.getElementById("individual-choice1");

var background1 = document.getElementById("background-image1");
var background2 = document.getElementById("background-image2");
var background3 = document.getElementById("background-image3");

var isToggled = false;
individualChoice1.addEventListener('mouseover', {
  handleEvent: function (event) {
      background1.classList.toggle("purple")
          //background1.classList.toggle("background-image1-hover");
  }
});
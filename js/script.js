/*typing animation */
var typed = new Typed(".typing", {
  strings: ["", "web Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
/*typing animation */
var typed2 = new Typed(".name", {
  strings: ["", "Souleymane Fall"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
var portfolioImages = document.querySelectorAll(".portfolio-img");

portfolioImages.forEach(function (portfolioImg) {
  var image = portfolioImg.querySelector("img");

  image.addEventListener("click", function () {
    if (image.requestFullscreen) {
      image.requestFullscreen();
    } else if (image.mozRequestFullScreen) {
      image.mozRequestFullScreen();
    } else if (image.webkitRequestFullscreen) {
      image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) {
      image.msRequestFullscreen();
    }
  });
});

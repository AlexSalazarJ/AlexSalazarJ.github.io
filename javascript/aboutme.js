//init navbars on all pages
$(document).ready(function () {
  $('.sidenav').sidenav();
});

//init parallax on mywork.html
$(document).ready(function () {
  $('.parallax').parallax();
});

//init and make picture move
let MOVE_INTERVAL = 5000; //milliseconds --> 5 seconds

let opions = {
  //options for carousel
  duration: 200,
  dist: -100,
  shift: 0,
  padding: 0,
  numVisible: 5,
  fullWidth: true,
  indicators: true,
  noWrap: false,
  onCycleTo: null,
};
$(document).ready(function () {
  $('.carousel').carousel(opions);
  window.setInterval(function () {
    $('.carousel').carousel('next');
  }, MOVE_INTERVAL);
});

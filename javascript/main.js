//this javascript file is used for all of the html files. Much of this file is
//initializing functions for materialize.css

//initialize text for form on contact me html
$(document).ready(function () {
  M.updateTextFields();
});

//init navbars on all pages
$(document).ready(function () {
  $('.sidenav').sidenav();
});

//init parallax on mywork.html
$(document).ready(function () {
  $('.parallax').parallax();
});

//init and make picture move
let MOVE_INTERVAL = 3000; //milliseconds

let opions = {
  //options for carousel
  duration: 200,
  dist: -100,
  shift: 0,
  padding: 0,
  numVisible: 5,
  fullWidth: false,
  indicators: false,
  noWrap: false,
  onCycleTo: null,
};
$(document).ready(function () {
  $('.carousel').carousel(opions);
  window.setInterval(function () {
    $('.carousel').carousel('next');
  }, MOVE_INTERVAL);
});

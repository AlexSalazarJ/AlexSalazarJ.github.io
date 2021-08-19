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

//init and set auto next on photos on home page
$(document).ready(function () {
  $('.carousel').carousel();
  window.setInterval(function () {
    $('.carousel').carousel('next');
  }, 3000);
});

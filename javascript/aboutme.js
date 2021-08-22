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
  duration: 200, //        Type:Number         Desc: Transition duration in milliseconds.
  dist: -100, //           Type:Number         Desc: Perspective zoom. If 0, all items are the same size.
  shift: 0, //             Type:Number         Desc: Set the spacing of the center item.
  padding: 0, //           Type:Number         Desc: Set the padding between non center items.
  numVisible: 5, //        Type:Number         Desc: Set the number of visible items.
  fullWidth: false, //      Type:Boolean        Desc: Make the carousel a full width slider like the second example.
  indicators: false, //     Type:Boolean        Desc: Set to true to show indicators.
  noWrap: false, //        Type:Boolean        Desc: Don't wrap around and cycle through items.
  onCycleTo: null, //      Type:Function       Desc: Callback for when a new slide is cycled to.
};
$(document).ready(function () {
  $('.carousel').carousel(opions);
  window.setInterval(function () {
    $('.carousel').carousel('next');
  }, MOVE_INTERVAL);
});

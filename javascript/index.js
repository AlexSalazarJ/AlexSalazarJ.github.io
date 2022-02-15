/***********************************************
 * CONSTANTS
 ***********************************************/

const TOTAL_NUM_OF_GALLERY_PHOTOS = 34;
const PHOTO_GALLERY_NUMBERS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
];
/***********************************************
 * CONSTANTS end
 ***********************************************/

/***********************************************
 * Initialize Materialize components
 ***********************************************/
//init navbar
$(document).ready(function () {
  $('.sidenav').sidenav();
});

//init and make picture move
let MOVE_INTERVAL = 2000; //milliseconds

let opions = {
  //options for carousel
  duration: 200, //        Type:Number         Desc: Transition duration in milliseconds.
  dist: -100, //           Type:Number         Desc: Perspective zoom. If 0, all items are the same size.
  shift: 0, //             Type:Number         Desc: Set the spacing of the center item.
  padding: 0, //           Type:Number         Desc: Set the padding between non center items.
  numVisible: 5, //        Type:Number         Desc: Set the number of visible items.
  fullWidth: false, //     Type:Boolean        Desc: Make the carousel a full width slider like the second example.
  indicators: false, //    Type:Boolean        Desc: Set to true to show indicators.
  noWrap: false, //        Type:Boolean        Desc: Don't wrap around and cycle through items.
  onCycleTo: null, //      Type:Function       Desc: Callback for when a new slide is cycled to.
};
$(document).ready(function () {
  $('.carousel').carousel(opions);
  window.setInterval(function () {
    $('.carousel').carousel('next');
  }, MOVE_INTERVAL);
});
/***********************************************
 * Initialize Materialize components ends
 ***********************************************/

/**********************************************************
 * shuffle(array)
 *
 * Description:  Fisher–Yates shuffle.
 * I found this here: https://bost.ocks.org/mike/shuffle/
 **********************************************************/
function shuffle(array) {
  let m = array.length;
  let t = NaN;
  let i = NaN;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
/**********************************************************
 * shuffle(array) ends
 **********************************************************/

/**********************************************************
 * randomize_photo_gallery()
 *
 * Description: The purpose of this function is to randomize
 * the photo gallery order. There are over 200 photos and if
 * they are not randomized, the user would most likely end
 * up only seeing the same photos when the visit the home
 * page.
 **********************************************************/
function randomize_photo_gallery() {
  //randomize the number order of the photos
  let photos = PHOTO_GALLERY_NUMBERS.slice(0);
  photos = shuffle(photos);
  for (let i = 0; i < TOTAL_NUM_OF_GALLERY_PHOTOS; ++i) {
    document.getElementById(
      `img-num-${i}`
    ).src = `images/babies/homepage_gallery_photo_${photos[i]}.JPG`;
  }
}
/**********************************************************
 * randomize_photo_gallery() end
 **********************************************************/

/**********************************************************
 * ocument.addEventListener(
  'DOMContentLoaded
 * Desc: When index.html loads,  randomize_photo_gallery()
 * will be called in order for the photos on the main page
 * to always be different.
 **********************************************************/
document.addEventListener(
  'DOMContentLoaded',
  function () {
    randomize_photo_gallery();
  },
  false
);
/**********************************************************
 * ocument.addEventListener(
  'DOMContentLoaded           end
 **********************************************************/

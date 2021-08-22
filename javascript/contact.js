/***********************************************
 * Initialize Materialize components
 ***********************************************/
$(document).ready(function () {
  M.updateTextFields();
});

//init navbars
$(document).ready(function () {
  $('.sidenav').sidenav();
});
/*
  Modar Initializer with options Starts
*/
document.addEventListener('DOMContentLoaded', function () {
  let options = {
    opacity: 0.5, //            Type: Number      Desc: Opacity of the modal overlay.
    inDuration: 250, //         Type: Number      Desc: Transition in duration in milliseconds.
    outDuration: 250, //        Type: Number      Desc: Transition out duration in milliseconds.
    onOpenStart: null, //       Type: Function    Desc: Callback function called BEFORE modal is OPENED.
    onOpenEnd: null, //         Type: Function    Desc: Callback function called AFTER modal is OPENED.
    onCloseStart: null, //      Type: Function    Desc: Callback function called BEFORE modal is CLOSED.
    onCloseEnd: null, //        Type: Function    Desc: Callback function called AFTER modal is CLOSED.
    preventScrolling: true, //  Type: Boolean     Desc: Prevent page from scrolling while modal is open.
    dismissible: true, //       Type: Boolean     Desc: Allow modal to be dismissed by keyboard or overlay click.
    startingTop: '4%', //       Type: String      Desc: Starting top offset
    endingTop: '10%', //        Type: String      Desc: Ending top offset
  };
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems, options);
});
/*
  Modar Initializer with options Ends
*/

/*
  function are_you_sure() starts
  Modar pops up on click and verifies if the user wants to opt out of the newsletter
*/
function are_you_sure() {
  let elem = document.querySelector('.newsletter_modal');
  let instance = M.Modal.getInstance(elem);
  instance.open();
}
/*
  function are_you_sure() ends
*/

/*
  function change_newsletter_choice_to_yes() starts
*/
function change_newsletter_choice_to_yes() {
  document.getElementById('no_newsletter').checked = false;
  document.getElementById('yes_newsletter').checked = true;
}
/*
  function change_newsletter_choice_to_yes() ends
*/

/*
function disable_no() starts
*/
function disable_no() {
  window.alert('Oops! Something went wrong');
  change_newsletter_choice_to_yes();
  $('#no_newsletter').prop('disabled', true);
  document.getElementById('new_subscriber').style.display = 'inline';

  let delayInMilliseconds = 500; //0.50 seconds
  setTimeout(function () {
    document.getElementById('new_subscriber').style.display = 'none';
  }, delayInMilliseconds);
}
/*
function disable_no() ends
*/

//modar that pops up when the user tries to opt out of weekly newsletter and
//asks if they are sure they want to opt out.

//initialize all modars
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
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

//modar pops up on click and verifies if the user wants to opt out of the newsletter
function are_you_sure() {
  var elem = document.querySelector('.newsletter_modal');
  var instance = M.Modal.getInstance(elem);
  instance.open();
}

//contact me function, will only go off once because once the button is disabled, it cannot be clicked again.

function change_newsletter_choice_to_yes() {
  document.getElementById('no_newsletter').checked = false;
  document.getElementById('yes_newsletter').checked = true;
}
function disable_no() {
  window.alert('Oops! Something went wrong');
  change_newsletter_choice_to_yes();
  $('#no_newsletter').prop('disabled', true);
  document.getElementById('new_subscriber').style.display = 'inline';

  var delayInMilliseconds = 2000; //2 seconds
  setTimeout(function () {
    document.getElementById('new_subscriber').style.display = 'none';
  }, delayInMilliseconds);
}

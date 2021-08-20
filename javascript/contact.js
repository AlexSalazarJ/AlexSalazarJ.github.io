//contact me trolling with disabled button
function disable_no() {
  // $('#no_newsletter').prop('disabled', true);
  document.getElementById('no_newsletter').checked = false;
  document.getElementById('yes_newsletter').checked = true;
  document.getElementById('new_subscriber').style.display = 'inline';
  var delayInMilliseconds = 5000; //2 seconds
  setTimeout(function () {
    document.getElementById('new_subscriber').style.display = 'none';
  }, delayInMilliseconds);
}

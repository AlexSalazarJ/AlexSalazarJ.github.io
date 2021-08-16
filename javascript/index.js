// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('select');
//   var instances = M.FormSelect.init(elems);
// });
$(document).ready(function () {
  $('select').formSelect();
  // Old way
  // $('select').material_select();
});

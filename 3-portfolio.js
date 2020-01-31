let form = document.querySelector("form");

function requestForm() {
  form.style.display = "block";
  document.getElementById("request").style.display = "none";
}

function requestSent() {
  form.style.display = "none";
  document.getElementById("request").style.display = "block";
}
function clearForm() {}

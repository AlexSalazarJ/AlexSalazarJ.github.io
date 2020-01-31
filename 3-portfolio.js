let form = document.querySelector("form");

function requestForm() {
  form.style.display = "block";
  document.getElementById("request").style.display = "none";
  document.getElementById("sent").style.display = "none";
}

function requestSent() {
  form.style.display = "none";
  document.getElementById("request").style.display = "block";
  document.getElementById("sent").style.display = "flex";
  return false;
}
function clearscreen() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("comment").value = "";
}

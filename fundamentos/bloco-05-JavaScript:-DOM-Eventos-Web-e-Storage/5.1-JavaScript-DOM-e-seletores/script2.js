document.getElementById("header-container").style.backgroundColor = "#50B169";

const importante = document.querySelectorAll(".emergency-tasks h3");

for (let i of importante) {
  i.style.backgroundColor = "#AB6EF4";
}

const divImportante = document.querySelectorAll(".emergency-tasks div");

for (let i of divImportante) {
  i.style.backgroundColor = "#F89E83";
}

const naoImportante = document.querySelectorAll(".no-emergency-tasks h3");

for (let i of naoImportante) {
  i.style.backgroundColor = "#232525";
}

const divNaoImportante = document.querySelectorAll(".no-emergency-tasks div");

for (let i of divNaoImportante) {
  i.style.backgroundColor = "#F9DB5E";
}

document.getElementById("footer-container").style.backgroundColor = "#0E3533";
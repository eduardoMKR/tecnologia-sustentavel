let fontSize = 18;

function applyFont() {
  document.body.style.fontSize = fontSize + "px";
}

function increaseFont() {
  fontSize += 2;
  applyFont();
}

function decreaseFont() {
  fontSize = Math.max(12, fontSize - 2);
  applyFont();
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

function toggleReadable() {
  document.body.classList.toggle("readable");
}

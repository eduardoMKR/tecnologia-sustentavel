let fontSize = 18;

function increaseFont() {
  fontSize += 2;
  document.body.style.fontSize = fontSize + "px";
}

function decreaseFont() {
  fontSize = Math.max(12, fontSize - 2);
  document.body.style.fontSize = fontSize + "px";
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

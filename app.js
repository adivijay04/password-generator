
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];

let donk = document.getElementById("create-el");
let dink = document.getElementById("new-el");

function runPass() {
  dink.textContent = ""
  donk.textContent = ""
  for (let i = 0; i < 16; i++) {

    let rand = characters[Math.floor(Math.random() * characters.length)];
    donk.textContent += rand;
  }
  for (let i = 0; i < 16; i++) {
    let rand1 = characters[Math.floor(Math.random() * characters.length)];
    dink.textContent += rand1;
  }
}

function newpass() {
  navigator.clipboard.writeText(donk.textContent);
  alert("Copied to clipboard");
}

function renewpass() {
  navigator.clipboard.writeText(dink.textContent);
  alert("Copied to clipboard");
}
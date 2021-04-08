var i = 0;
var txt = 'Desarrollador de Software';
var speed = 100;

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".typing-effect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
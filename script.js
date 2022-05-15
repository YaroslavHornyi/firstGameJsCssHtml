const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
  jump();
});
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 300);
}

let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("GAME OVER!");
  }
}, 10);

function CustomAlert() {
  this.render = function (dialog) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById("dialogoverlay");
    var dialogbox = document.getElementById("dialogbox");
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = winW / 2 - 550 * 0.5 + "px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    document.getElementById("dialogboxhead").innerHTML = "Заголовок";
    document.getElementById("dialogboxbody").innerHTML = dialog;
    document.getElementById("dialogboxfoot").innerHTML =
      '<button onclick="Alert.ok()">OK</button>';
  };
  this.ok = function () {
    document.getElementById("dialogbox").style.display = "none";
    document.getElementById("dialogoverlay").style.display = "none";
  };
}
var Alert = new CustomAlert();

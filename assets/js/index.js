// H2 Textanimation
const text = document.querySelector(".textanimation");
const content = text.innerText;
const splitText = content.split("");
text.innerText = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let a = 0;
let timer = setInterval(animation, 180);

function animation() {
  const span = text.querySelectorAll("span")[a];
  span.classList.add("fade");
  a++;

  if (a === splitText.length) {
    stop();
    return;
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}

//Canvas
const canvas = document.querySelector("#ballAnimation");
canvas.width = window.innerWidth;

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");

  let x1 = 100,
    y1 = 100,
    r1 = 30,
    vx1 = 2,
    vy1 = 2;

  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function createAnimateBall() {
    clear();
    ctx.beginPath();
    ctx.arc(x1, y1, r1, 0, Math.PI * 2);
    ctx.fillStyle = "#f6f6f6";
    ctx.fill();

    if (y1 > canvas.height - r1 || y1 < r1) {
      vy1 = -vy1;
    }
    if (x1 > canvas.width - r1 || x1 < r1) {
      vx1 = -vx1;
    }

    x1 += vx1;
    y1 += vy1;
  }

  createAnimateBall();
  setInterval(createAnimateBall, 20);
} else {
  alert(
    "Dieser Browser unterstützt das <canvas> Element nicht, versuche es mit einem anderen!"
  );
}

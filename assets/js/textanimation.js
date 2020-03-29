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

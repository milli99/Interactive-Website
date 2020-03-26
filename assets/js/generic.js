//Counter
const animatedCounter = document.querySelectorAll(".animatedCounter");
const speed = 200;

animatedCounter.forEach(animatedCounter => {
  const updateCount = () => {
    const target = +animatedCounter.getAttribute("data-target");
    const count = +animatedCounter.innerText;

    const inc = target / speed;

    if (count < target) {
      animatedCounter.innerText = count + inc;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});

//SliderImage

let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
//init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//show previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
//show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

if (arrowLeft) {
  // Left arrow click
  arrowLeft.addEventListener("click", function() {
    if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
  });
}
//Right arrow click
if (arrowRight) {
  arrowRight.addEventListener("click", function() {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  });
}
startSlide();

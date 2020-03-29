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

//ImageSlider

const slider = document.querySelectorAll(".slide");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
current = 0;

function reset() {
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  slider[0].style.display = "block";
}

function slideLeft() {
  reset();
  slider[current - 1].style.display = "block";
  current--;
}

function slideRight() {
  reset();
  slider[current + 1].style.display = "block";
  current++;
}

if (arrowLeft) {
  arrowLeft.addEventListener("click", leftArrowClick);

  function leftArrowClick() {
    if (current === 0) {
      current = slider.length;
    }
    slideLeft();
  }
}

if (arrowRight) {
  arrowRight.addEventListener("click", rightArrowClick);

  function rightArrowClick() {
    if (current === slider.length - 1) {
      current = -1;
    }
    slideRight();
  }
}
startSlide();

//AJAX

document.querySelector("#button").addEventListener("click", loadEmployees);

function loadEmployees() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);

  xhr.onload = function() {
    if (this.status == 200) {
      var employees = JSON.parse(this.responseText);

      var output = "";
      for (var i in employees) {
        output +=
          '<div class="employees">' +
          '<img src="' +
          employees[i].avatar_url +
          '" width="50" height="50">' +
          "</div>";
      }
      document.querySelector("#employees").innerHTML = output;
    }
  };
  xhr.send();
}

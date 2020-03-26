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
      /*setTimeout(updateCount, 1);*/
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});

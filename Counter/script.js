const showCount = document.querySelector(".count");
const increament = document.querySelector(".increase");
const decreament = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

steps.addEventListener("change", () => {
  stepCount = steps.innerHTML;
});

increament.addEventListener("click", () => {
  showCount.innerHTML = Number(showCount.innerHTML) + stepCount;
});

decreament.addEventListener("click", () => {
  showCount.innerHTML = Number(showCount.innerHTML) - stepCount;
});

reset.addEventListener("click", () => {
  showCount.innerHTML = 0;
});

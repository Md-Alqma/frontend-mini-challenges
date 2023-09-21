const showCount = document.querySelector(".count");
const increament = document.querySelector(".increase");
const decreament = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const steps = document.querySelector(".step-count");

// console.log(steps.value);
// const stepCount = steps.value || 1;

// steps.addEventListener("change", () => {
//   stepCount = steps.value;
// });

increament.addEventListener("click", () => {
  showCount.innerHTML = Number(showCount.innerHTML) + steps.valueAsNumber;
});

decreament.addEventListener("click", () => {
  showCount.innerHTML = Number(showCount.innerHTML) - Number(steps.value);
});

steps.addEventListener("change", () => {
  const stepsValue = steps.valueAsNumber;

  if (Number.isNaN(stepsValue) || stepsValue < 0) {
    steps.value = 1;
  }
});

reset.addEventListener("click", () => {
  showCount.innerHTML = 0;
});

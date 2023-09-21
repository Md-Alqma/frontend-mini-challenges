const showCount = document.querySelector(".count");
const increament = document.querySelector(".increase");
const decreament = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

increament.addEventListener("click", () => {
  showCount.innerHTML = Number(showCount.innerHTML) + 1;
});

decreament.addEventListener("click", () => {
  showCount.innerHTML = Number(showCount.innerHTML) - 1;
});

reset.addEventListener("click", () => {
  showCount.innerHTML = 0;
});

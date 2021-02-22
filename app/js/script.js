const closeRules = document.querySelector(".rule-close");
const openRules = document.querySelector(".rules__butt");
const ruleModal = document.querySelector(".rules__overlay");

closeRules.addEventListener("click", () => {
  ruleModal.classList.add("hide");
});

openRules.addEventListener("click", () => {
  ruleModal.classList.remove("hide");
});

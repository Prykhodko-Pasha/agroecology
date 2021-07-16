const refs = {
  burgerBtn: document.querySelector(".burger"),
  burgerIcon: document.querySelector(".burger__icon"),
};

refs.burgerBtn.addEventListener("click", () => {
  refs.burgerBtn.classList.toggle("is-open");
});

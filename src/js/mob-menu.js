const refs = {
  burgerBtn: document.querySelector(".burger"),
  burgerIcon: document.querySelector(".burger__icon"),
  mobMenu: document.querySelector(".mob-menu"),
};

refs.burgerBtn.addEventListener("click", () => {
  refs.burgerBtn.classList.toggle("is-open");
  refs.mobMenu.classList.toggle("is-open");
});

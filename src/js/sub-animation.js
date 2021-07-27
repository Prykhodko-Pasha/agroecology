const refs = {
  subList: document.querySelector("#js-sub"),
  //   burgerIcon: document.querySelector(".burger__icon"),
  //   mobMenu: document.querySelector(".mob-menu"),
};

refs.subList.addEventListener("click", (e) => {
  e.target.classList.toggle("is-open");
  //   refs.mobMenu.classList.toggle("is-open");
});

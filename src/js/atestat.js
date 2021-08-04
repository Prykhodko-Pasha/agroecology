const refs = {
  atestat: document.querySelector(".atestat"),
  lightbox: document.querySelector(".lightbox"),
  lightbox__image: document.querySelector(".lightbox__image"),
  overlay: document.querySelector(".lightbox__overlay"),
  closeBtn: document.querySelector('[data-action="close-lightbox"]'),
};
refs.atestat.addEventListener("click", onOpenModal);

function onOpenModal(e) {
  // e.preventDefault();
  if (!e.target.classList.contains("lightbox__min-image")) {
    return;
  }
  // console.log(e.target);
  refs.lightbox.classList.add("is-open");
  refs.lightbox__image.src = e.target.dataset.source;
  refs.lightbox__image.alt = e.target.alt;

  // IMG_IDX = imgArr.indexOf(e.target);
  // console.log(IMG_IDX);
  window.addEventListener("keydown", onKeyPressModal);
}
// ================================================

// =========== Закрытие модального окна ===========
refs.closeBtn.addEventListener("click", onCloseModal);
refs.overlay.addEventListener("click", onCloseModal);

function onCloseModal() {
  refs.lightbox.classList.remove("is-open");
  refs.lightbox__image.src = "";
  refs.lightbox__image.alt = "";

  window.removeEventListener("keydown", onKeyPressModal);
  // IMG_IDX = 0;
}

function onKeyPressModal(e) {
  // console.log(e.code);
  if (e.code === "Escape") {
    onCloseModal();
  }
}

// const onImgClick = (e) => {
//   refs.atestat.classList.toggle("atestat-clicked");
//   // console.log(e.target);
//   // listenBody();
// };

// refs.atestat.addEventListener("click", onImgClick);

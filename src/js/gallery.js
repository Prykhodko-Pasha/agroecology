const galleryItems = [
  {
    preview: "./images/photos/grunt/1.jpg",
    original: "./images/photos/grunt/1.jpg",
    description: "Фільтрація грунту",
  },
  {
    preview: "./images/photos/grunt/2.jpg",
    original: "./images/photos/grunt/2.jpg",
    description: "Фільтрація грунту",
  },
  {
    preview: "./images/photos/grunt/3.jpg",
    original: "./images/photos/grunt/3.jpg",
    description: "Фільтрація грунту",
  },
  {
    preview: "./images/photos/grunt/4.jpg",
    original: "./images/photos/grunt/4.jpg",
    description: "Фільтрація грунту",
  },
  {
    preview: "./images/photos/grunt/5.jpg",
    original: "./images/photos/grunt/5.jpg",
    description: "Фільтрація грунту",
  },
  //   {
  //     preview: "./images/photos/grunt/6.jpg",
  //     original: "./images/photos/grunt/6.jpg",
  //     description: "Фільтрація грунту",
  //   },
];

const refs = {
  gallery: document.querySelector(".gallery"),
  lightbox: document.querySelector(".lightbox"),
  lightbox__image: document.querySelector(".lightbox__image"),
  overlay: document.querySelector(".lightbox__overlay"),
  closeBtn: document.querySelector('[data-action="close-lightbox"]'),
};

let IMG_IDX = 0; // будущий индекс полноэкранного изображения

// ========== Создание и рендер разметки ==========
const galleryMarkup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></li>`
  )
  .join("");
// console.log(galleryMarkup);

refs.gallery.innerHTML = galleryMarkup;
// ================================================

// =========== Открытие модального окна ===========
const imgArr = [...document.querySelectorAll(".gallery__image")];

refs.gallery.addEventListener("click", onOpenModal);

function onOpenModal(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  // console.log(e.target);
  refs.lightbox.classList.add("is-open");
  refs.lightbox__image.src = e.target.dataset.source;
  refs.lightbox__image.alt = e.target.alt;

  IMG_IDX = imgArr.indexOf(e.target);
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
  IMG_IDX = 0;
}

function onKeyPressModal(e) {
  // console.log(e.code);
  switch (e.code) {
    case "Escape":
      onCloseModal();
      break;
    case "ArrowRight":
      IMG_IDX += 1;
      if (IMG_IDX === galleryItems.length) {
        // если дошли до конца галлереи
        IMG_IDX = 0; // переходим на начало
      }
      refs.lightbox__image.src = galleryItems[IMG_IDX].original;
      refs.lightbox__image.alt = galleryItems[IMG_IDX].description;
      break;
    case "ArrowLeft":
      IMG_IDX -= 1;
      if (IMG_IDX < 0) {
        // если дошли до начала галлереи
        IMG_IDX = galleryItems.length - 1; // переходим в конец
      }
      refs.lightbox__image.src = galleryItems[IMG_IDX].original;
      refs.lightbox__image.alt = galleryItems[IMG_IDX].description;
      break;
  }
}

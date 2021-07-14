const refs = {
  header: document.querySelector(".header"),
  logo: document.querySelector(".logo"),
  menu: document.querySelector(".menu"),
};
// console.dir(refs.header);
let scrollPrev = 0;

const animateHeader = () => {
  let scrolled = window.scrollY;

  console.log(scrolled);

  if (scrolled > 50 && scrolled > scrollPrev) {
    refs.header.classList.add("header-is-scrolled");
  } else {
    refs.header.classList.remove("header-is-scrolled");
  }
  scrollPrev = scrolled;
  console.log(scrollPrev);
};

window.addEventListener("scroll", animateHeader);

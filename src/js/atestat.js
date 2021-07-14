const refs = {
  atestat: document.querySelector(".atestat"),
  // body: document.querySelector("body"),
  // menu: document.querySelector(".menu"),
};
// console.dir(refs.atestat);
// let scrollPrev = 0;

// const onImgClose = (e) => {
//   console.log(e.currentTarget);
//   console.log(e.target);
//   if (e.currentTarget !== e.target) {
//     refs.atestat.classList.remove("atestat-clicked");
//     // refs.body.removeEventListener("click", onImgClose);
//   }
// };

// const listenBody = () => {
//   refs.body.addEventListener("click", onImgClose);
// };

const onImgClick = (e) => {
  refs.atestat.classList.toggle("atestat-clicked");
  // console.log(e.target);
  // listenBody();
};

refs.atestat.addEventListener("click", onImgClick);

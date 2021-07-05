var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
    function (el) {
      console.log('hello'. el)
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

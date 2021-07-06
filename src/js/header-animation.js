const refs = {
    header: document.querySelector(".header"),
    logo: document.querySelector(".logo"),
    menu: document.querySelector(".menu"),
};
console.log(refs.header);

const animateHeader = () => {
    refs.header.classList.add('header-is-scrolled');
    refs.logo.classList.add('logo-is-scrolled');
    refs.menu.classList.add('menu-is-scrolled');
}

window.addEventListener("scroll", animateHeader);
const refs = {
    header: document.querySelector(".header"),
    logo: document.querySelector(".logo"),
    menu: document.querySelector(".menu"),
};
// console.dir(refs.header);



const animateHeader = () => {
    let top = window.scrollY;
    // console.log(top);
    
    if(top > 1) {
    refs.header.classList.add('header-is-scrolled');
    refs.logo.classList.add('logo-is-scrolled');
        refs.menu.classList.add('menu-is-scrolled');
    }
    else {
        refs.header.classList.remove('header-is-scrolled');
        refs.logo.classList.remove('logo-is-scrolled');
        refs.menu.classList.remove('menu-is-scrolled');
    }
}

window.addEventListener("scroll", animateHeader);
